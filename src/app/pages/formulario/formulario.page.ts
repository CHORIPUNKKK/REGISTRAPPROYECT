import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ServJSONService } from 'src/app/service/serv-json.service';
import { User } from 'src/app/models/models.module';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage {

  constructor(private router: Router, private userService: ServJSONService) { }

  tengoCuenta() {
    this.router.navigate(['/login']);
  }

  closeModal() {
    this.router.navigate(['/login']);
  }

  submitForm(form: NgForm) {
    if (form.valid) {
      // Copia los valores del formulario al objeto user
      const user: User = { ...form.value };
      
      // Asigna un valor vacío a la propiedad "confirmPassword"
      user.confirmPassword = '';
  
      // Definir el rol del usuario como "alumno"
      user.rol = 'alumno';
  
      // Registra al usuario automáticamente como "alumno"
      this.userService.registerUser(user).subscribe(
        (response) => {
          // Manejar la respuesta del servidor JSON, por ejemplo, mostrar un mensaje de éxito o redirigir a la página de inicio de sesión.
          console.log('Usuario registrado como alumno con éxito:', response);
          // Redirigir al usuario a la página de inicio de sesión o la página de destino deseada
          this.router.navigate(['/login']);
        },
        (error) => {
          // Manejar errores, como mostrar un mensaje de error al usuario.
          console.error('Error al registrar usuario:', error);
          // También puedes mostrar un mensaje de error al usuario si lo deseas
        }
      );
    }
  }
  passwordMatch(control: AbstractControl): { [key: string]: boolean } | null {
    const contrasena = control.get('contrasena');
    const confirmPassword = control.get('confirmPassword');
  
    if (contrasena && confirmPassword && contrasena.value !== confirmPassword.value) {
      return { passwordMismatch: true };
    }
  
    return null;
  }
}
  

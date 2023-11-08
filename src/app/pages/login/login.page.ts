import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ServJSONService } from 'src/app/service/serv-json.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  usuario:string='';
  password:string='';

  alertButtons: string[] = ['Enviar correo'];
  alertInputs: { placeholder: string }[] = [
    {
      placeholder: 'Ingrese correo',
    },
  ];
  
  constructor(private router: Router, private toastCtrl:ToastController, private userService: ServJSONService) { }

  ngOnInit(): void {
    interface User {
    rol: string;
    email: string;
    nombre: string;
    contrasena: string;
    id: number;
  }
  }
  
  async irMenu() {
    const nombre = this.usuario;
    const contrasena = this.password;
  
    this.userService.verifyUser(nombre, contrasena).subscribe(
      (users: any) => {
        console.log('Respuesta del servicio:', users);
        const user = users.find((u: any) => u.nombre === nombre);
  
        if (!user) {
          // Usuario no encontrado
          console.log('Usuario no encontrado');
          // Mostrar un mensaje de error
          this.mostrarMensajeError('Credenciales incorrectas');
        } else {
          // Usuario encontrado
          console.log('Usuario encontrado:', user);
          // Verificar el rol del usuario y redirigir según el rol
          if (user.rol === 'admin') {
            this.router.navigate(['/menu']);
          } else if (user.rol === 'alumno') {
            this.router.navigate(['/alumno']);
          } else {
            this.mostrarMensajeError('Rol de usuario no válido');
          }
        }
      },
      (error) => {
        // Manejo de errores
        console.error('Error al verificar usuario:', error);
      }
    );
  }
  
  
  
  
  mostrarMensajeError(mensaje: string) {
    this.toastCtrl
      .create({
        message: mensaje,
        duration: 3000,
        position: 'bottom',
      })
      .then((toast) => toast.present());
  }

  irRegistrar() {
    this.router.navigate(['/registrar']); // Redirige a la página "registrar"
  }

  IrFormulario() {
    this.router.navigate(['/formulario']);
  }
}

import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.page.html',
  styleUrls: ['./alumno.page.scss'],
})
export class AlumnoPage {
  constructor(private router: Router, private menuCtrl: MenuController) {}

  irHome() {
    this.router.navigate(['/home']);
  }

  irUser() {
    this.router.navigate(['/user']);
  }

  irScanAssis() {
    this.router.navigate(['/scan-assis']);
  }

  openNotifications() {
    this.menuCtrl.enable(true, 'notifications-menu');
    this.menuCtrl.open('notifications-menu');
  }

  mostrarImagenYRedirigir() {
    const imagenCamara = document.getElementById('imagenCamara') as HTMLImageElement;

    // Mostrar la imagen
    imagenCamara.style.display = 'block';

    // Esperar 5 segundos antes de redirigir
    setTimeout(() => {
      // Ocultar la imagen
      imagenCamara.style.display = 'none';

      // Redirigir a scan-assis
      this.router.navigate(['/scan-assis']); // Asegúrate de que esta sea la ruta correcta
    }, 5000); // 5000 milisegundos = 5 segundos
  }
}


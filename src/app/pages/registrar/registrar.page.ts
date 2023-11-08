import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

  constructor(private alertController: AlertController, private router: Router) { }

  async mostrarAlerta() {
    const alert = await this.alertController.create({
      header: 'Confirmación Enviada',
      message: 'Se ha enviado una confirmación por correo.',
      buttons: ['OK']
    });

    await alert.present();
  }

  ngOnInit() {
  }

  irLogin() {
    this.router.navigate(['/login']); // Navega hacia la página del alumno ('/alumno')
  }
}

import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ServJSONService } from 'src/app/service/serv-json.service';
import { Registros } from 'src/app/interfaces/registros';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  mostrarSecciones: boolean = false;
  alumnos: Registros[] = []; // Cambiado el nombre a "alumnos"

  constructor(private router: Router, private menuCtrl: MenuController, private servJSONService: ServJSONService) {}

  ngOnInit() {
    this.servJSONService.listarAlumnos().subscribe(data => {
      // Obtener los datos de los alumnos
      this.alumnos = data;
    });
  }

  irAListarAlumnos(seccion: string) {
    this.router.navigate(['/listar-alumnos', seccion]);
  }

  irHome() {
    this.router.navigate(['/home']);
  }

  irUser() {
    this.router.navigate(['/user']);
  }

  openNotifications() {
    this.menuCtrl.enable(true, 'notifications-menu');
    this.menuCtrl.open('notifications-menu');
  }

  irAConectarDisp() {
    this.router.navigate(['/conectar-disp']);
  }

  mostrarVentanaFlotante() {
    this.mostrarSecciones = true;
  }

  ocultarVentanaFlotante() {
    this.mostrarSecciones = false;
  }

  mostrarInformacion(seccion: string) {
    // Implementa lo que quieras hacer cuando se hace clic en un botón para mostrar información
    console.log('Mostrar información de la sección:', seccion);
    // También puedes mostrar los registros de alumnos aquí
    console.log('Registros de Alumnos:', this.alumnos);
  }
}

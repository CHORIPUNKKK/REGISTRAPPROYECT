import { Component, OnInit } from '@angular/core';
import { ServJSONService } from 'src/app/service/serv-json.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-alumnos',
  templateUrl: './listar-alumnos.page.html',
  styleUrls: ['./listar-alumnos.page.scss'],
})
export class ListarAlumnosPage implements OnInit {
  alumnos: any; // Cambiado el nombre a "alumnos"

  constructor(private servJSONService: ServJSONService, private router: Router) {}
  
  ngOnInit() {
    this.servJSONService.listarAlumnos().subscribe(data => {
      // Obtener los datos de los alumnos
      this.alumnos = data;
    });
  }
  
  irAConectarDisp() {
    this.router.navigate(['/conectar-disp']);
  }
  
  irMenu() {
    this.router.navigate(['/menu']); // Redirige a la página "menu"
  }
}

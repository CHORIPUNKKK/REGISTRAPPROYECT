import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage {
  constructor(private router: Router) {} // Inyecta el servicio Router

  irAlumno() {
    this.router.navigate(['/alumno']); // Navega hacia la página del alumno ('/alumno')
  }
}

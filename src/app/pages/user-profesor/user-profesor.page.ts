import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profesor',
  templateUrl: './user-profesor.page.html',
  styleUrls: ['./user-profesor.page.scss'],
})
export class UserProfesorPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  irMenu() {
    this.router.navigate(['/menu']); // Navega hacia la página del alumno ('/alumno')
  }

}

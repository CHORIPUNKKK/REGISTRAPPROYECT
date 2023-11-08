import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scan-assis',
  templateUrl: './scan-assis.page.html',
  styleUrls: ['./scan-assis.page.scss'],
})
export class ScanAssisPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  irAlumno() {
    this.router.navigate(['/alumno']);
  }

  mostrarImagen() {
    const imagenCamaraContainer = document.getElementById('imagenCamaraContainer');
    const imagenCamaraCard = document.getElementById('imagenCamaraCard');

    // Verificar si los elementos existen antes de intentar modificar sus propiedades
    if (imagenCamaraContainer && imagenCamaraCard) {
      // Mostrar la imagen a pantalla completa
      imagenCamaraContainer.style.display = 'block';
      // Mostrar la tarjeta con el botón
      imagenCamaraCard.style.display = 'block';
    }
  }

  cerrarCard() {
    const imagenCamaraContainer = document.getElementById('imagenCamaraContainer');
    const imagenCamaraCard = document.getElementById('imagenCamaraCard');

    // Verificar si los elementos existen antes de intentar modificar sus propiedades
    if (imagenCamaraContainer && imagenCamaraCard) {
      // Ocultar la tarjeta y la imagen a pantalla completa
      imagenCamaraContainer.style.display = 'none';
      imagenCamaraCard.style.display = 'none';
    }
  }

}

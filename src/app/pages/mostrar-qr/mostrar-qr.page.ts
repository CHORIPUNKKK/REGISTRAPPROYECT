import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mostrar-qr',
  templateUrl: './mostrar-qr.page.html',
  styleUrls: ['./mostrar-qr.page.scss'],
})
export class MostrarQRPage implements OnInit {
  texto: string = '';
  nombres: string[] = ['Chupete Suazo', 'Pablo Chicle', 'Choripunk', 'Patan Legends', 'Papu Gomez', 'Rene Bridge', 'Cristiano Bonaldo'];

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // Genera un nombre aleatorio
    const nombreAleatorio = this.nombres[Math.floor(Math.random() * this.nombres.length)];

    // Construye el mensaje del código QR
    this.texto = `${nombreAleatorio} Te has registrado en la asistencia correctamente.`;
  }

  irAConectarDisp() {
    this.router.navigate(['/conectar-disp']);
  }

  irMenu() {
    this.router.navigate(['/menu']);
  }
}

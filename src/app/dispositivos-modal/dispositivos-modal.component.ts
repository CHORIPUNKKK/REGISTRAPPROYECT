import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dispositivos-modal',
  templateUrl: './dispositivos-modal.component.html',
  styleUrls: ['./dispositivos-modal.component.scss'],
})
export class DispositivosModalComponent  implements OnInit {
  

  constructor(private navCtrl: NavController, private router: Router) { }

  ngOnInit() {}
  
  irAMenuPage() {
    this.navCtrl.navigateForward('/menu'); // Navega a la ruta '/menu'
  }
}

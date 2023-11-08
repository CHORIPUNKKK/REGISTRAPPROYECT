import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MostrarQRPageRoutingModule } from './mostrar-qr-routing.module';

import { MostrarQRPage } from './mostrar-qr.page';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  imports: [
    QRCodeModule,
    CommonModule,
    FormsModule,
    IonicModule,
    MostrarQRPageRoutingModule
  ],
  declarations: [MostrarQRPage],
  providers: [],
  bootstrap: [MostrarQRPage]
})
export class MostrarQRPageModule {}

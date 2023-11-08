import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConectarDISPPageRoutingModule } from './conectar-disp-routing.module';

import { ConectarDISPPage } from './conectar-disp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConectarDISPPageRoutingModule
  ],
  declarations: [ConectarDISPPage]
})
export class ConectarDISPPageModule {}

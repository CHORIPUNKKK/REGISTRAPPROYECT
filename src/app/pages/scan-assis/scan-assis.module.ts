import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScanAssisPageRoutingModule } from './scan-assis-routing.module';

import { ScanAssisPage } from './scan-assis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScanAssisPageRoutingModule
  ],
  declarations: [ScanAssisPage]
})
export class ScanAssisPageModule {}

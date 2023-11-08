import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlumnoPageRoutingModule } from './alumno-routing.module';

import { AlumnoPage } from './alumno.page';

import { LibreriaModule } from 'src/app/componentes/libreria/libreria.module';

@NgModule({
  imports: [
    LibreriaModule,
    CommonModule,
    FormsModule,
    IonicModule,
    AlumnoPageRoutingModule
  ],
  declarations: [AlumnoPage]
})
export class AlumnoPageModule {}

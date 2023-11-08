import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//////////////////////////////////////////////////
import { PieComponent } from '../pie/pie.component';
import { PlatoComponent } from '../plato/plato.component';
import { CabeceraComponent } from '../cabecera/cabecera.component';

@NgModule({
  declarations: [
    PieComponent,CabeceraComponent,PlatoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PieComponent,CabeceraComponent,PlatoComponent
  ]
})
export class LibreriaModule { }

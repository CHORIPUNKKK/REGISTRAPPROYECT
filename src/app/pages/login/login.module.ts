import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';

import { ModuloMaterialModule } from 'src/app/modulos/modulo-material/modulo-material.module';
import { AppComponentesComponent } from 'src/app/app-componentes/app-componentes.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    ModuloMaterialModule, FormsModule,
  ],
  declarations: [LoginPage, AppComponentesComponent]
})
export class LoginPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserProfesorPageRoutingModule } from './user-profesor-routing.module';

import { UserProfesorPage } from './user-profesor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserProfesorPageRoutingModule
  ],
  declarations: [UserProfesorPage]
})
export class UserProfesorPageModule {}

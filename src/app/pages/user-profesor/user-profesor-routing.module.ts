import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserProfesorPage } from './user-profesor.page';

const routes: Routes = [
  {
    path: '',
    component: UserProfesorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserProfesorPageRoutingModule {}

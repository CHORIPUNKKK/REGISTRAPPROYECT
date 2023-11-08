import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConectarDISPPage } from './conectar-disp.page';

const routes: Routes = [
  {
    path: '',
    component: ConectarDISPPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConectarDISPPageRoutingModule {}



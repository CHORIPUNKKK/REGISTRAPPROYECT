import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScanAssisPage } from './scan-assis.page';

const routes: Routes = [
  {
    path: '',
    component: ScanAssisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScanAssisPageRoutingModule {}

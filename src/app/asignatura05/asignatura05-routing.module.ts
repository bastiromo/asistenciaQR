import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Asignatura05Page } from './asignatura05.page';

const routes: Routes = [
  {
    path: '',
    component: Asignatura05Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Asignatura05PageRoutingModule {}

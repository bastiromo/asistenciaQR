import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Asignatura03Page } from './asignatura03.page';

const routes: Routes = [
  {
    path: '',
    component: Asignatura03Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Asignatura03PageRoutingModule {}

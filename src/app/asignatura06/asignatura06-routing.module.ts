import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Asignatura06Page } from './asignatura06.page';

const routes: Routes = [
  {
    path: '',
    component: Asignatura06Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Asignatura06PageRoutingModule {}

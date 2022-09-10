import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Asignatura07Page } from './asignatura07.page';

const routes: Routes = [
  {
    path: '',
    component: Asignatura07Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Asignatura07PageRoutingModule {}

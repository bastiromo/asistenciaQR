import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Asignatura04Page } from './asignatura04.page';

const routes: Routes = [
  {
    path: '',
    component: Asignatura04Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Asignatura04PageRoutingModule {}

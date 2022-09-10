import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Asignatura01Page } from './asignatura01.page';

const routes: Routes = [
  {
    path: '',
    component: Asignatura01Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Asignatura01PageRoutingModule {}

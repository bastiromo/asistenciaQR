import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Asignatura02Page } from './asignatura02.page';

const routes: Routes = [
  {
    path: '',
    component: Asignatura02Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Asignatura02PageRoutingModule {}

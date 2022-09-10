import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Asignatura01PageRoutingModule } from './asignatura01-routing.module';

import { Asignatura01Page } from './asignatura01.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Asignatura01PageRoutingModule
  ],
  declarations: [Asignatura01Page]
})
export class Asignatura01PageModule {}

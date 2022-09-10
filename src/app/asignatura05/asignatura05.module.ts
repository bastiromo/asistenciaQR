import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Asignatura05PageRoutingModule } from './asignatura05-routing.module';

import { Asignatura05Page } from './asignatura05.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Asignatura05PageRoutingModule
  ],
  declarations: [Asignatura05Page]
})
export class Asignatura05PageModule {}

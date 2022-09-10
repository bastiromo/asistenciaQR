import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Asignatura07PageRoutingModule } from './asignatura07-routing.module';

import { Asignatura07Page } from './asignatura07.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Asignatura07PageRoutingModule
  ],
  declarations: [Asignatura07Page]
})
export class Asignatura07PageModule {}

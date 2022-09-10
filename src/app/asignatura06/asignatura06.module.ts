import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Asignatura06PageRoutingModule } from './asignatura06-routing.module';

import { Asignatura06Page } from './asignatura06.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Asignatura06PageRoutingModule
  ],
  declarations: [Asignatura06Page]
})
export class Asignatura06PageModule {}

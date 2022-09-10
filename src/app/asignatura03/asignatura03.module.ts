import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Asignatura03PageRoutingModule } from './asignatura03-routing.module';

import { Asignatura03Page } from './asignatura03.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Asignatura03PageRoutingModule
  ],
  declarations: [Asignatura03Page]
})
export class Asignatura03PageModule {}

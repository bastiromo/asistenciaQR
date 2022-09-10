import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Asignatura04PageRoutingModule } from './asignatura04-routing.module';

import { Asignatura04Page } from './asignatura04.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Asignatura04PageRoutingModule
  ],
  declarations: [Asignatura04Page]
})
export class Asignatura04PageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Asignatura02PageRoutingModule } from './asignatura02-routing.module';

import { Asignatura02Page } from './asignatura02.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Asignatura02PageRoutingModule
  ],
  declarations: [Asignatura02Page]
})
export class Asignatura02PageModule {}

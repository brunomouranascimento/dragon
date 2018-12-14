import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './@material/material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    MaterialModule,
    NavbarComponent,
    CardComponent
  ],
  declarations: [
    NavbarComponent,
    CardComponent
  ],
  providers: []
})
export class ComponentsModule { }

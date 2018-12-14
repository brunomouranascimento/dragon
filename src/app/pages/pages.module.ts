import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ComponentsModule } from '../components/components.module';
import { MaterialModule } from '../components/@material/material.module';
import { DragonsModule } from './dragons/dragons.module';

import { LoginComponent } from './login/login.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ComponentsModule,
    MaterialModule,
    DragonsModule
  ],
  exports: [],
  declarations: [
    LoginComponent
  ]
})
export class PagesModule { }

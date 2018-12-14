import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DragonsComponent } from './dragons.component';
import { DragonDetailComponent } from './dragon-detail/dragon-detail.component';


import { ComponentsModule } from 'src/app/components/components.module';
import { MaterialModule } from 'src/app/components/@material/material.module';

import { DragonsService } from './dragons.service';
import { DragonOrderPipe } from './dragon-order.pipe';


@NgModule({
  declarations: [DragonsComponent, DragonOrderPipe, DragonDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    MaterialModule
  ],
  exports: [DragonsComponent, DragonDetailComponent],
  providers: [DragonsService]
})
export class DragonsModule { }

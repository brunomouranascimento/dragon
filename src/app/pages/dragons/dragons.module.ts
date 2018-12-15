import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DragonsComponent } from './dragons.component';
import { DragonDetailComponent } from './dragon-detail/dragon-detail.component';

import { ComponentsModule } from 'src/app/components/components.module';
import { MaterialModule } from 'src/app/components/@material/material.module';
import { OrderModule } from 'ngx-order-pipe';

import { DragonsService } from './dragons.service';
import { DragonsRemoveComponent } from './dragons-remove/dragons-remove.component';


@NgModule({
  declarations: [DragonsComponent, DragonDetailComponent, DragonsRemoveComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    MaterialModule,
    OrderModule
  ],
  exports: [DragonsComponent, DragonDetailComponent, DragonsRemoveComponent],
  providers: [DragonsService]
})
export class DragonsModule { }

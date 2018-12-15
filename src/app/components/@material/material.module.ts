import { NgModule } from '@angular/core';
import * as Material from '@angular/material';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    Material.MatTooltipModule,
    Material.MatButtonModule,
    Material.MatIconModule,
    Material.MatListModule,
    Material.MatMenuModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatDialogModule,
    Material.MatSnackBarModule
  ],
  exports: [
    Material.MatTooltipModule,
    Material.MatButtonModule,
    Material.MatIconModule,
    Material.MatListModule,
    Material.MatMenuModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatDialogModule,
    Material.MatSnackBarModule
  ],
  declarations: [],
  providers: []
})
export class MaterialModule { }

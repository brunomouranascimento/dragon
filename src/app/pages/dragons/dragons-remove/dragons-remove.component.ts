import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';

import { Dragon } from 'src/app/models/dragon';
import { DragonsService } from '../dragons.service';

@Component({
  selector: 'app-dragons-remove',
  templateUrl: './dragons-remove.component.html',
  styleUrls: ['./dragons-remove.component.scss']
})
export class DragonsRemoveComponent implements OnInit {

  constructor(
      public dialogRef: MatDialogRef<DragonsRemoveComponent>,
      @Inject(MAT_DIALOG_DATA) public dragon: Dragon,
      private dragonsService: DragonsService,
      public snackBar: MatSnackBar) { }

  onCancel() {
    this.dialogRef.close();
  }

  removeDragon(dragon: Dragon) {
    this.dragonsService.deleteDragon(dragon.slug).subscribe(data => {
      if (data['ok'] === 1) {
        this.openSnackBar(`Dragão ${dragon.name} foi excluído`, 'OK');
        this.dialogRef.close();
      }
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }

  ngOnInit() {
  }

}

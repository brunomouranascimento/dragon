import { Component, OnInit, Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { DragonsService } from './dragons.service';
import { Dragon } from 'src/app/models/dragon';
import { MatDialog } from '@angular/material';
import { DragonsRemoveComponent } from './dragons-remove/dragons-remove.component';

@Component({
  selector: 'app-dragons',
  templateUrl: './dragons.component.html',
  styleUrls: ['./dragons.component.scss']
})
export class DragonsComponent implements OnInit {

  dragons: Dragon[];
  name = 'name';

  constructor(private dragonsService: DragonsService, private router: Router, public dialog: MatDialog) { }

  addDragon() {
    sessionStorage.setItem('addMode', 'true');
    this.router.navigate(['/novo']);
  }

  editDragon(slug: string) {
    this.router.navigate([`/${slug}/editar`]);
    sessionStorage.removeItem('addMode');
  }

  onRemoveDragon(slug: string): void {
    const dialogRef = this.dialog.open(DragonsRemoveComponent, { data: slug });
    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }

  ngOnInit() {
    this.dragonsService.getDragons().subscribe(data => {
      this.dragons = data['items'] as Dragon[];
    });
  }
}

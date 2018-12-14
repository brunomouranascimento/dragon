import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DragonsService } from './dragons.service';
import { Dragon } from 'src/app/models/dragon';

@Component({
  selector: 'app-dragons',
  templateUrl: './dragons.component.html',
  styleUrls: ['./dragons.component.scss']
})
export class DragonsComponent implements OnInit {

  dragons: Dragon[];
  name = '';
  path: string[] = ['dragon'];


  constructor(private dragonsService: DragonsService, private router: Router) { }

  addDragon() {
    sessionStorage.setItem('addMode', 'true');
    this.router.navigate(['/novo']);
  }

  editDragon(slug: string) {
    this.router.navigate([`/${slug}/editar`]);
    sessionStorage.removeItem('addMode');
  }

  onRemoveDragon(slug: string) {
    this.removeDragon(slug);
  }

  removeDragon(slug: string) {
    this.dragonsService.deleteDragon(slug).subscribe(data => {
      if (data['ok'] === 1) {
        this.ngOnInit();
      }
    });
  }

  ngOnInit() {
    this.dragonsService.getDragons().subscribe(data => {
      this.dragons = data['items'] as Dragon[];
      console.log(this.dragons);
    });
  }
}

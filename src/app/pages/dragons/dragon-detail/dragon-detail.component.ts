import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Subscription } from 'rxjs';
import { Dragon } from 'src/app/models/dragon';
import { DragonsService } from '../dragons.service';

@Component({
  selector: 'app-dragon-detail',
  templateUrl: './dragon-detail.component.html',
  styleUrls: ['./dragon-detail.component.scss']
})
export class DragonDetailComponent implements OnInit {

  subscription: Subscription;
  dragon = <Dragon>{};
  dragonForm: FormGroup;
  addMode = false;

  constructor(
      private router: Router,
      private activatedRoute: ActivatedRoute,
      private dragonService: DragonsService,
      private formBuilder: FormBuilder) { }

  cancel() {
    this.router.navigate(['/']);
  }

  updateDragon(slug: string, dragon: Dragon) {
    this.dragonService.updateDragon(slug, dragon).subscribe(data => {
      if (data['ok'] === 1) {
        this.router.navigate(['/']);
      }
    });
  }

  addDragon(dragon: Dragon) {
    this.dragonService.addDragon(dragon).subscribe(data => {
      if (data['ok'] === 1) {
        sessionStorage.removeItem('addMode');
        this.router.navigate(['/']);
      }
    });
  }

  ngOnInit() {
    if (sessionStorage.getItem('addMode')) {
      this.addMode = true;
    }
    if (!sessionStorage.getItem('addMode')) {
      this.subscription = this.activatedRoute.params.subscribe(
        (params: any) => {
          const slug = params['slug'];
          this.dragonService.getDragon(slug).subscribe((data: Dragon) => {
            this.dragon = data;
            console.log(data);
          });
        }
      );
    }
    this.dragonForm = this.formBuilder.group({
      name: ['' || this.dragon.name, Validators.required],
      type: ['', Validators.required],
      histories: [['Senhor dos Anéis']]
    });
  }
}
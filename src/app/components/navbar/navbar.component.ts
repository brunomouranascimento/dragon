import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;

  constructor(private authenticationService: AuthenticationService) { }

  changeTheme(theme: string) {
    const classList = document.body.classList;
    while (classList.length > 0) {
      classList.remove(classList.item(0));
    }
    document.body.classList.add(`${theme}-theme`);
  }

  onLogout() {
    this.authenticationService.logout();
  }

  ngOnInit() {
    this.isLoggedIn$ = this.authenticationService.isLoggedIn;
  }

}

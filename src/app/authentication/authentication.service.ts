import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/models/user';

@Injectable()
export class AuthenticationService {

  private loggedIn = new BehaviorSubject<boolean>(false);
  private showLogin = new BehaviorSubject<boolean>(true);

  constructor(private router: Router) { }

  login(user: User) {
    if (user.userName === 'bruno.nascimento' && user.password === '1234' ) {
      this.loggedIn.next(true);
      this.router.navigate(['/']);
      user.authData = window.btoa(user.password);
      sessionStorage.setItem('id', user.authData);
      sessionStorage.setItem('name', user.userName);
    }
  }

  logout() {
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
    sessionStorage.removeItem('id');
    sessionStorage.removeItem('name');
  }

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  get isShowLogin() {
    return this.showLogin.asObservable();
  }

}

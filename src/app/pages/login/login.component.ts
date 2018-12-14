import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isShowLogin$: Observable<boolean>;
  loginForm: FormGroup;

  constructor(private authenticationService: AuthenticationService, private formBuilder: FormBuilder) { }

  onLogin() {
    if (this.loginForm.valid) {
      this.authenticationService.login(this.loginForm.value);
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: ['bruno.nascimento', Validators.required],
      password: ['1234', Validators.required]
    });
    this.isShowLogin$ = this.authenticationService.isShowLogin;
  }

}

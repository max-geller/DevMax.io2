import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  templateUrl: './login.component.html',
})
export class LoginComponent {
  email: string;
  password: string;
  constructor(public auth: AuthService,) { }

  emailSignIn() {
    this.auth.emailSignIn(this.email, this.password);
    this.email = '';
    this.password = '';
  }

  signOut() {
    this.auth.signOut();
  }
}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
})
export class SignupComponent {
  email: string;
  password: string;
  constructor(public auth: AuthService,) { }

  emailSignUp() {
    this.auth.emailSignUp(this.email, this.password);
    this.email = '';
    this.password = '';
  }

}

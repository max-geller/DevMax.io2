import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/services/auth.service';

declare var particlesJS: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {


  get isAuthenticated(): boolean {
    return this.authService.isAuthenticated;
  }

  titles: any[];

  constructor(
    public authService: AuthService) { }
}



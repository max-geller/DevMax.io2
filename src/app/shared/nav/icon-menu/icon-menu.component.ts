import { AuthService } from './../../../core/services/auth.service';
import { Component, Inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-icon-menu',
  templateUrl: './icon-menu.component.html',
})
export class IconMenuComponent {
  user$: Observable<firebase.User>;
  isAuthenticated: boolean;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    public auth: AuthService,
  ) {
    this.user$ = this.auth.userStatus();
  }

  openDocumentation() {
    window.open("https://docs.devmax.io", "_blank");
  }

  openSlack() {
    window.open("https://devmax.slack.com", "_blank");
  }
  signOut() {
    this.auth.signOut()
    //      this.document.location.href = 'https://www.devmax.io';
  };


}


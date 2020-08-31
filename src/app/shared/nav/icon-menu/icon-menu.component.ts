import { AuthService } from './../../../core/services/auth.service';
import { switchMap } from 'rxjs/operators';
import { User } from './../../../core/models/user.model';
import { Component, Inject } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-icon-menu',
  templateUrl: './icon-menu.component.html',
})
export class IconMenuComponent {
  user$: Observable<firebase.User>;
  admin: string;
  isAuthenticated: boolean;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private afAuth: AngularFireAuth,
    private authService: AuthService,
    private afs: AngularFirestore,
  ) {
    this.user$ = this.authService.userStatus();

  }

  openDocumentation() {
    window.open("https://docs.devmax.io", "_blank");
  }

  openSlack() {
    window.open("https://devmax.slack.com", "_blank");
  }
  signOut() {
    this.authService.signOut()
    //      this.document.location.href = 'https://www.devmax.io';
  };


}


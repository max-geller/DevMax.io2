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
  user$: Observable<User>;
  admin: string;
  isAuthenticated: boolean;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private auth: AngularFireAuth,
    private afs: AngularFirestore,
  ) {

    // Return User's Auth State:
    this.user$ = auth.authState.pipe(
      switchMap(user => {
        // Logged in
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          // Logged out
          return of(null);
        }
      })
    );

  }
  isLoggedIn() {
    if (this.user$ == null) {
      return false;
    } else {
      return true;
    }
  }
  signOut() {
    this.auth.auth.signOut().then(() => {
      this.isAuthenticated = false;
      this.document.location.href = 'https://www.devmax.io';
    });

  }


  openDocumentation() {
    window.open("https://docs.devmax.io", "_blank");
  }

  openSlack() {
    window.open("https://devmax.slack.com", "_blank");
  }
}

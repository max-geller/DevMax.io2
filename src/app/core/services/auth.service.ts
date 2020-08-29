import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from '../models/user.model';

import { DOCUMENT } from '@angular/common';

@Injectable()
export class AuthService {
  // Define an Observable for User's Auth State
  user$: Observable<User>;
  isAuthenticated: boolean;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {

    // Return User's Auth State:
    this.user$ = afAuth.authState.pipe(
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
  // Update User Data to Firestore Collection after Login*
  private updateUserData(user) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(
      `users/${user.uid}`
    );
    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      roles: user.roles
    };
    return userRef.set(data, { merge: true });
  }


  // Email Signin
  emailSignIn(email: string, password: string) {
    this.afAuth.auth
      .signInWithEmailAndPassword(email, password)

      .then(res => {
        this.isAuthenticated = true;
        console.log(this.afAuth.auth.currentUser + 'Successfully signed in!');
      })


      .then(() => {
        // Redirect to Home
        this.router.navigate(['/home']);
      })
      .then(res => {
        console.log(this.afAuth.authState);
      })
      .catch(err => {
        console.log('Something is wrong:', err.message);
      });
  }

  // Sign Out
  signOut() {
    this.afAuth.auth.signOut().then(() => {
      this.isAuthenticated = false;
      this.document.location.href = 'https://www.devmax.io';
    });



  }

  // Verify Email

  // Forgot Password
  ForgotPassword(passwordResetEmail) {
    return this.afAuth.auth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox!');
      })
      .catch(error => {
        window.alert(error);
      });
  }

}

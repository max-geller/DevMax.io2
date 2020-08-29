import { Injectable, OnInit } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { User } from './../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private afs: AngularFirestore) { }
  getUsers() {
    return this.afs.collection('users').snapshotChanges();
  }

  createUser(user: User) {
    return this.afs.collection('users').add(user);
  }

  updateUser(user: User) {
    this.afs.doc('users/' + user.uid).update(user);
  }

  deleteUser(user: User) {
    this.afs.doc('users/' + user).delete();
  }

}





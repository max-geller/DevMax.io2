import { Component, ViewChild, OnInit } from '@angular/core';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from './../../../../../core/services/user.service';
import { User } from './../../../../../core/models/user.model';
import { ConfirmDeleteService } from '../../../../../shared/services/confirm-delete.service';
import * as faker from 'faker';

@Component({
  templateUrl: './manage-users.component.html',
})

export class ManageUsersComponent implements OnInit {

  users: User[];

  @ViewChild(MatSort, { static: false }) sort: MatSort;


  constructor(private afs: AngularFirestore, public dialog: MatDialog, public userService: UserService, public confirmDeleteService: ConfirmDeleteService) { }
  ngOnInit() {
    this.userService.getUsers().subscribe(data => {
      this.users = data.map(e => {
        return {
          id: e.payload.doc.id,
        }
      })
    });

  }
  createUser(user: User) {
    return this.afs.collection('users').add(user);
  }

  getUsers() {
    return this.afs.collection('users').snapshotChanges();
  }
  updateUser(user: User) {
    this.afs.doc('users/' + user.uid).update(user);
  }

  deleteUser(user: User) {
    this.afs.doc('users/' + user.uid).delete();
  }

  seedUser() {
    const user = {
      uid: faker.random.alphaNumeric(16),
      displayName: faker.name.findName(),
      email: faker.internet.email(),
      tenant: faker.random.alphaNumeric(16),
      role: faker.random.alphaNumeric(16),
    }
    this.afs.collection('users').doc(user.uid).set(user)
  };

}

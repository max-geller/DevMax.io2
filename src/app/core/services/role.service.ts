import { Injectable, OnInit } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { Role } from './../models/user.model';

@Injectable({
    providedIn: 'root'
})
export class RoleService {

    constructor(private afs: AngularFirestore) { }
    getRoles() {
        return this.afs.collection('roles').snapshotChanges();
    }

    createRole(role: Role) {
        return this.afs.collection('roles').add(role);
    }

    updateRole(role: Role) {
        this.afs.doc('roles/' + role.id).update(role);
    }

    deleteRole(role: Role) {
        this.afs.doc('roles/' + role).delete();
    }

}





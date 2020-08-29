import { Injectable, OnInit } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { Team } from './../models/team.model';

@Injectable({
    providedIn: 'root'
})
export class TeamService {

    constructor(private afs: AngularFirestore) { }
    getTeams() {
        return this.afs.collection('teams').snapshotChanges();
    }

    createTeam(team: Team) {
        return this.afs.collection('teams').add(team);
    }

    updateTeam(team: Team) {
        this.afs.doc('teams/' + team.id).update(team);
    }

    deleteTeam(team: Team) {
        this.afs.doc('teams/' + team).delete();
    }

}





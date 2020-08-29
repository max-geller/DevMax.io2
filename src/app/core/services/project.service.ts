import { Injectable, OnInit } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { Project } from './../models/project.model';

@Injectable({
    providedIn: 'root'
})

export class ProjectService {

    constructor(private afs: AngularFirestore) { }
    getProjects() {
        return this.afs.collection('projects').snapshotChanges();
    }

    createProject(project: Project) {
        return this.afs.collection('projects').add(project);
    }

    updateProject(project: Project) {
        this.afs.doc('projects/' + project.id).update(project);
    }

    deleteProject(project: Project) {
        this.afs.doc('projects/' + project).delete();
    }

}




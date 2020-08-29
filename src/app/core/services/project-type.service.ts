import { Injectable, OnInit } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { ProjectType } from '../models/project-type.model';

@Injectable({
    providedIn: 'root'
})

export class ProjectTypeService {

    constructor(private afs: AngularFirestore) { }
    getProjectTypes() {
        return this.afs.collection('projectTypes').snapshotChanges();
    }

    createProjectType(projectType: ProjectType) {
        return this.afs.collection('projectTypes').add(projectType);
    }

    updateProjectType(projectType: ProjectType) {
        this.afs.doc('projectTypes/' + projectType.id).update(projectType);
    }

    deleteProjectType(projectType: ProjectType) {
        this.afs.doc('projectTypes/' + projectType).delete();
    }

}




import { Injectable, OnInit } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { Task } from './../models/task.model';

@Injectable({
    providedIn: 'root'
})
export class TaskService {

    constructor(private afs: AngularFirestore) { }
    getTasks() {
        return this.afs.collection('tasks').snapshotChanges();
    }

    createTask(task: Task) {
        return this.afs.collection('tasks').add(task);
    }

    updateTask(task: Task) {
        this.afs.doc('tasks/' + task.id).update(task);
    }

    deleteTask(task: Task) {
        this.afs.doc('tasks/' + task).delete();
    }

}





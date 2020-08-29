
import { Injectable, OnInit } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { System } from './../models/system.model';

@Injectable({
    providedIn: 'root'
})

export class SystemService {

    constructor(private afs: AngularFirestore) { }
    getSystems() {
        return this.afs.collection('systems').snapshotChanges();
    }

    createSystem(system: System) {
        return this.afs.collection('systems').add(system);
    }

    updateSystem(system: System) {
        this.afs.doc('systems/' + system.id).update(system);
    }

    deleteSystem(system: System) {
        this.afs.doc('systems/' + system).delete();
    }

}




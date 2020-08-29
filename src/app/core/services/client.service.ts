import { Injectable, OnInit } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { Client } from '../models/client.model';

@Injectable({
  providedIn: 'root'
})

export class ClientService {

  constructor(private afs: AngularFirestore) { }
  getClients() {
    return this.afs.collection('clients').snapshotChanges();
  }

  createClient(client: Client) {
    return this.afs.collection('clients').add(client);
  }

  updateClient(client: Client) {
    this.afs.doc('clients/' + client.id).update(client);
  }

  deleteClient(client: Client) {
    this.afs.doc('clients/' + client).delete();
  }

}




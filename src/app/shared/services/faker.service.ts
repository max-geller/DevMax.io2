import { Injectable } from '@angular/core';
import * as faker from 'faker';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
    providedIn: 'root'
})

export class FakerService {

    constructor(private afs: AngularFirestore) { }

    addFakeUser() {
        const hacker = {
            name: faker.name.findName(),
            age: faker.random.number({ min: 18, max: 99 }),
            email: faker.internet.email(),
            phrase: faker.hacker.phrase(),
            uid: faker.random.alphaNumeric(16)
        }
        this.afs.collection('users').doc(hacker.uid).set(hacker)
    }
    addFakeTenant() {
        const hacker = {
            name: faker.name.findName(),
            age: faker.random.number({ min: 18, max: 99 }),
            email: faker.internet.email(),
            phrase: faker.hacker.phrase(),
            uid: faker.random.alphaNumeric(16)
        }
        this.afs.collection('tenants').doc(hacker.uid).set(hacker)
    }
    addFakeProject() {
        const hacker = {
            name: faker.name.findName(),
            age: faker.random.number({ min: 18, max: 99 }),
            email: faker.internet.email(),
            phrase: faker.hacker.phrase(),
            uid: faker.random.alphaNumeric(16)
        }
        this.afs.collection('projects').doc(hacker.uid).set(hacker)
    }
    addFakeEstimate() {
        const hacker = {
            name: faker.name.findName(),
            age: faker.random.number({ min: 18, max: 99 }),
            email: faker.internet.email(),
            phrase: faker.hacker.phrase(),
            uid: faker.random.alphaNumeric(16)
        }
        this.afs.collection('estimates').doc(hacker.uid).set(hacker)
    }
    addFakeSubscription() {
        const hacker = {
            name: faker.name.findName(),
            age: faker.random.number({ min: 18, max: 99 }),
            email: faker.internet.email(),
            phrase: faker.hacker.phrase(),
            uid: faker.random.alphaNumeric(16)
        }
        this.afs.collection('subscriptions').doc(hacker.uid).set(hacker)
    }
    addFakeClient() {
        const hacker = {
            name: faker.name.findName(),
            age: faker.random.number({ min: 18, max: 99 }),
            email: faker.internet.email(),
            phrase: faker.hacker.phrase(),
            uid: faker.random.alphaNumeric(16)
        }
        this.afs.collection('clients').doc(hacker.uid).set(hacker)
    }
    addFakeTeam() {
        const hacker = {
            name: faker.name.findName(),
            age: faker.random.number({ min: 18, max: 99 }),
            email: faker.internet.email(),
            phrase: faker.hacker.phrase(),
            uid: faker.random.alphaNumeric(16)
        }
        this.afs.collection('teams').doc(hacker.uid).set(hacker)
    }
}






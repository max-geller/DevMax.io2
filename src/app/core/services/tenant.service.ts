import { Injectable, OnInit } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { Tenant } from './../models/tenant.model';

@Injectable({
    providedIn: 'root'
})
export class TenantService {

    constructor(private afs: AngularFirestore) { }
    getTenants() {
        return this.afs.collection('tenants').snapshotChanges();
    }

    createTenant(tenant: Tenant) {
        return this.afs.collection('tenants').add(tenant);
    }

    updateTenant(tenant: Tenant) {
        this.afs.doc('tenants/' + tenant.id).update(tenant);
    }

    deleteTenant(tenant: Tenant) {
        this.afs.doc('tenants/' + tenant).delete();
    }

}





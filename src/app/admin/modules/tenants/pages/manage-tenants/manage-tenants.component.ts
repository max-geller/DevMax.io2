import { MatSort } from '@angular/material/sort';
import { Tenant } from './../../../../../core/models/tenant.model';
import { TenantService } from './../../../../../core/services/tenant.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import * as faker from 'faker';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  templateUrl: './manage-tenants.component.html',
})

export class ManageTenantsComponent implements OnInit {
  tenants: Tenant[];

  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(private afs: AngularFirestore, public tenantService: TenantService,) { }

  ngOnInit() {
    this.tenantService.getTenants().subscribe(data => {
      this.tenants = data.map(e => {
        return {
          id: e.payload.doc.id,
        }
      })
    });
  }


}

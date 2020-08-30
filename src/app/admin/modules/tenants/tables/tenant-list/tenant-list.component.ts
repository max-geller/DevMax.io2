import { TenantService } from './../../../../../core/services/tenant.service';
import { User } from './../../../../../core/models/user.model';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';

import { AngularFirestore } from '@angular/fire/firestore';
import { MatTableDataSource } from '@angular/material/table';
import { ConfirmDeleteService } from '../../../../../shared/services/confirm-delete.service';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { AddTenantComponent } from '../../modals/add-tenant/add-tenant.component';
import { EditTenantComponent } from '../../modals/edit-tenant/edit-tenant.component';


@Component({
  selector: 'admin-tenant-list',
  templateUrl: './tenant-list.component.html',
})
export class TenantListComponent implements OnInit {
  tenants: MatTableDataSource<any>;
  displayedColumns = [
    'id',
    'name',
    'isActive',
    'edit',
    'delete',
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;


  constructor(
    private afs: AngularFirestore,
    public dialog: MatDialog,
    public service: TenantService,
    public confirmDeleteService: ConfirmDeleteService,
  ) {
  }

  addTenant(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.maxHeight = "95vh";
    dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(AddTenantComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      data => this.service.createTenant(data));
  }

  editTenant(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.maxHeight = "95vh";
    dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(EditTenantComponent, dialogConfig);
  }

  deleteTenant(): void {
    const deleteRef = this.confirmDeleteService.confirmDelete();
  }



  ngOnInit() {
    // Step 1: Make a Reference to Data in Firestore:
    // 1a: Invoke the 'afs' Property
    this.afs
      // 1b: Point to collection
      .collection<any>('tenants')
      // 1c: Request an Observable with valueChanges()
      .valueChanges()
      // 1d: Subscribe to that Observable...
      .subscribe(data => {
        // 1e: ...and Pass that Data to the Material Data Table
        this.tenants = new MatTableDataSource(data);
        this.tenants.sort = this.sort;
        this.tenants.paginator = this.paginator;
        this.tenants.sort = this.sort;
      });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.tenants.filter = filterValue;
  }


}
import { ConfirmDeleteService } from '../../../../../shared/services/confirm-delete.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { AddRoleComponent } from '../../modals/add-role/add-role.component';
import { EditRoleComponent } from '../../modals/edit-role/edit-role.component';
import { RoleService } from './../../../../../core/services/role.service';


@Component({
  selector: 'admin-roles-list',
  templateUrl: './roles-list.component.html',
})
export class RolesListComponent implements OnInit {
  roles: MatTableDataSource<any>;
  displayedColumns = [
    'description',
    'edit',
    'delete',
  ];
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(
    public service: RoleService,
    private afs: AngularFirestore,
    public dialog: MatDialog,
    public confirmDeleteService: ConfirmDeleteService) { }

  addRole(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.maxHeight = "95vh";
    dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(AddRoleComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      data => this.service.createRole(data));
  }

  editRole(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.maxHeight = "95vh";
    dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(EditRoleComponent, dialogConfig);

  }
  deleteRole(): void {
    const deleteRef = this.confirmDeleteService.confirmDelete();
  }


  ngOnInit() {
    // Step 1: Make a Reference to Data in Firestore:
    // 1a: Invoke the 'afs' Property
    this.afs
      // 1b: Point to collection
      .collection<any>('roles')
      // 1c: Request an Observable with valueChanges()
      .valueChanges()
      // 1d: Subscribe to that Observable...
      .subscribe(data => {
        // 1e: ...and Pass that Data to the Material Data Table
        this.roles = new MatTableDataSource(data);
        this.roles.sort = this.sort;
      });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.roles.filter = filterValue;
  }


}
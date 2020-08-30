import { ConfirmDeleteService } from '../../../../../shared/services/confirm-delete.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { AddClientComponent } from '../../modals/add-client/add-client.component';
import { EditClientComponent } from '../../modals/edit-client/edit-client.component';


@Component({
  selector: 'admin-client-list',
  templateUrl: './client-list.component.html',
})
export class ClientListComponent implements OnInit {
  clients: MatTableDataSource<any>;
  displayedColumns = [
    'clientName',
    'edit',
    'delete',
  ];
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(private afs: AngularFirestore, public dialog: MatDialog, public confirmDeleteService: ConfirmDeleteService) { }

  addClient(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.maxHeight = "95vh";
    dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(AddClientComponent, dialogConfig);
  }

  editClient(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.maxHeight = "95vh";
    dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(EditClientComponent, dialogConfig);

  }
  deleteClient(): void {
    const deleteRef = this.confirmDeleteService.confirmDelete();
  }


  ngOnInit() {
    // Step 1: Make a Reference to Data in Firestore:
    // 1a: Invoke the 'afs' Property
    this.afs
      // 1b: Point to collection
      .collectionGroup('clients')
      // 1c: Request an Observable with valueChanges()
      .valueChanges()
      // 1d: Subscribe to that Observable...
      .subscribe(data => {
        // 1e: ...and Pass that Data to the Material Data Table
        this.clients = new MatTableDataSource(data);
        this.clients.sort = this.sort;
      });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.clients.filter = filterValue;
  }


}
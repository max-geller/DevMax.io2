import { MatDialog } from '@angular/material/dialog';
import { Injectable } from '@angular/core';
import { ConfirmDeleteComponent } from '../components/modals/confirm-delete/confirm-delete.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmDeleteService {

  constructor(public dialog: MatDialog) { }

  confirmDelete(): void {
    const dialogRef = this.dialog.open(ConfirmDeleteComponent, {
      width: '550px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

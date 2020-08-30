import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  templateUrl: './tenant-settings.component.html',
  styles: [
  ]
})
export class TenantSettingsComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<TenantSettingsComponent>) { }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }

}

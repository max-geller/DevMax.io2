import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { TenantService } from './../../../../../core/services/tenant.service';

@Component({
  templateUrl: './add-tenant.component.html',
})

export class AddTenantComponent implements OnInit {
  addTenantFormGroup: FormGroup;

  constructor(private tenantService: TenantService, private fb: FormBuilder, private dialogRef: MatDialogRef<AddTenantComponent>) { }

  ngOnInit() {
    this.addTenantFormGroup = this.fb.group({
      id: '',
      isActive: '',
      name: ''
    });
  }

  save() {
    this.dialogRef.close(this.addTenantFormGroup.value);
  }

  close() {
    this.dialogRef.close();
  }
}

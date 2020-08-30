import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  templateUrl: './add-role.component.html',
})

export class AddRoleComponent implements OnInit {
  addRoleFormGroup: FormGroup;

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<AddRoleComponent>) { }

  ngOnInit() {
    this.addRoleFormGroup = this.fb.group({
      description: '',
    });
  }
  save() {
    this.dialogRef.close(this.addRoleFormGroup.value);
  }
  close() {
    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

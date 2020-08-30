import { UserService } from '../../../../../core/services/user.service';

import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  templateUrl: './edit-user.component.html',
})

export class EditUserComponent implements OnInit {
  editUserFormGroup: FormGroup;

  constructor(private userService: UserService, private fb: FormBuilder, private dialogRef: MatDialogRef<EditUserComponent>) { }

  ngOnInit() {
    this.editUserFormGroup = this.fb.group({
      firstName: '',
      lastName: '',
      displayName: '',
      email: '',
      role: '',
      tenant: '',
      teams: '',
      company: '',
      title: '',
      location: '',
      department: '',
      workEmail: '',
      mobilePhone: '',
      workPhone: '',
      defaultTheme: '',
      sendWelcomeEmail: '',
      verifyAccount: '',
      homepage: '',
      tutorial: '',
    });
  }


  save() {
    this.dialogRef.close(this.editUserFormGroup.value);
  }

  delete() {
    this.dialogRef.close();
  }

  close() {
    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

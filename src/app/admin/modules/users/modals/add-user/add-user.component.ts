import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from './../../../../../core/services/user.service';

@Component({
  templateUrl: './add-user.component.html',
})

export class AddUserComponent implements OnInit {
  addUserFormGroup: FormGroup;

  constructor(private userService: UserService, private fb: FormBuilder, private dialogRef: MatDialogRef<AddUserComponent>) { }

  ngOnInit() {
    this.addUserFormGroup = this.fb.group({
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
    this.dialogRef.close(this.addUserFormGroup.value);
  }

  close() {
    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

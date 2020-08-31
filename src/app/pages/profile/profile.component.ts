import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../core/services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({

  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {
  example: FormControl = this.fb.control("");
  exampleFormGroup: FormGroup;

  constructor(private fb: FormBuilder, private afs: AngularFirestore, public auth: AuthService) { }

  ngOnInit() {
    this.exampleFormGroup = this.fb.group({
      exampleField: '',
    });
  }

}

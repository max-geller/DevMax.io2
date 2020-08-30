import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  templateUrl: './schedule-report.component.html',
})

export class ScheduleReportComponent implements OnInit {
  example: FormControl = this.fb.control("");
  exampleFormGroup: FormGroup;
  
  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<ScheduleReportComponent>) { }

  ngOnInit() {
    this.exampleFormGroup = this.fb.group({
      exampleField: '',
    });
  }

  close() {
    this.dialogRef.close();
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }
}

import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'admin-application-status',
  templateUrl: './application-status.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ApplicationStatusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'admin-user-activity',
  templateUrl: './user-activity.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserActivityComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

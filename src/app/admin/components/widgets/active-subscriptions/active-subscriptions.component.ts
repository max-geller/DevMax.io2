import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'admin-active-subscriptions',
  templateUrl: './active-subscriptions.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActiveSubscriptionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

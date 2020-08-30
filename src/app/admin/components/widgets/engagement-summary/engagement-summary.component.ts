import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'admin-engagement-summary',
  templateUrl: './engagement-summary.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EngagementSummaryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

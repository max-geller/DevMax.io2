import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'admin-deployment-summary',
  templateUrl: './deployment-summary.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeploymentSummaryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

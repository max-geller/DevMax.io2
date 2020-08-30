import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'admin-database-status',
  templateUrl: './database-status.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatabaseStatusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

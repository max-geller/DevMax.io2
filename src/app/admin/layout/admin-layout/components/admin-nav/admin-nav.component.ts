import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'admin-admin-nav',
  templateUrl: './admin-nav.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminNavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

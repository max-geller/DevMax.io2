import { Router } from '@angular/router';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
Router

@Component({
  selector: 'admin-admin-actions',
  templateUrl: './admin-actions.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminActionsComponent implements OnInit {


  constructor() { }
  openNewTab(url) {
    window.open(url, '_blank');
  }

  ngOnInit(): void {
  }

}

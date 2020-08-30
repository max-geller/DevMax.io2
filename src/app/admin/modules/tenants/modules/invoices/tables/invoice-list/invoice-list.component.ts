import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'estibase-invoice-list',
  templateUrl: './invoice-list.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InvoiceListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

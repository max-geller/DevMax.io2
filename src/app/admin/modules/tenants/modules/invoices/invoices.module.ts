import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InvoicesRoutes } from './invoices.routes';
import { InvoiceDetailComponent } from './pages/invoice-detail/invoice-detail.component';
import { InvoiceListComponent } from './tables/invoice-list/invoice-list.component';
import { SharedModule } from './../../../../../shared/shared.module';
import { CoreModule } from './../../../../../core/core.module';
import { ManageInvoicesComponent } from './pages/manage-invoices/manage-invoices.component';
import { AddInvoiceComponent } from './modals/add-invoice/add-invoice.component';
import { EditInvoiceComponent } from './modals/edit-invoice/edit-invoice.component';





@NgModule({
  declarations: [
    InvoiceDetailComponent,
    InvoiceListComponent,
    ManageInvoicesComponent,
    AddInvoiceComponent,
    EditInvoiceComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    InvoicesRoutes,
    RouterModule
  ]
})
export class InvoicesModule { }

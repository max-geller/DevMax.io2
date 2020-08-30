import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../../core/core.module';
import { SharedModule } from '../../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { TenantsRoutes } from './tenants.routes';

import { TenantListComponent } from './tables/tenant-list/tenant-list.component';
import { ManageTenantsComponent } from './pages/manage-tenants/manage-tenants.component';
import { AddTenantComponent } from './modals/add-tenant/add-tenant.component';
import { EditTenantComponent } from './modals/edit-tenant/edit-tenant.component';

import { TenantDetailsComponent } from './modals/tenant-details/tenant-details.component';
import { TenantSettingsComponent } from './pages/tenant-settings/tenant-settings.component';
import { InvoicesModule } from './modules/invoices/invoices.module';
import { TenantDetailComponent } from './pages/tenant-detail/tenant-detail.component';
import { BillingModule } from './modules/billing/billing.module';




@NgModule({
  declarations: [
    ManageTenantsComponent,
    AddTenantComponent,
    EditTenantComponent,
    TenantListComponent,
    TenantDetailsComponent,
    TenantSettingsComponent,
    TenantDetailComponent,
  ],

  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    RouterModule,
    TenantsRoutes,
    InvoicesModule,
    BillingModule,
  ],
  entryComponents: [
    // Put Modals Here
    AddTenantComponent,
    EditTenantComponent,
  ]
})
export class TenantsModule { }

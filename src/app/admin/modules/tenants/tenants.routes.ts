import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageTenantsComponent } from './pages/manage-tenants/manage-tenants.component';
import { TenantSettingsComponent } from './pages/tenant-settings/tenant-settings.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'manage',
    pathMatch: 'full'
  },
  {
    path: 'manage',
    component: ManageTenantsComponent
  },
  {
    path: 'settings',
    component: TenantSettingsComponent
  },
  {
    path: 'billing',
    loadChildren: () => import('./modules/billing/billing.module').then(m => m.BillingModule),
  },
  {
    path: 'invoices',
    loadChildren: () => import('./modules/invoices/invoices.module').then(m => m.InvoicesModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class TenantsRoutes { }

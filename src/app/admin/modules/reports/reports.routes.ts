import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageReportsComponent } from './pages/manage-reports/manage-reports.component';
import { BillingSnapshotComponent } from './reports/billing-snapshot/billing-snapshot.component';
import { InvestorReportComponent } from './reports/investor-report/investor-report.component';
import { MonthlySummaryComponent } from './reports/monthly-summary/monthly-summary.component';
import { TenantActivityComponent } from './reports/tenant-activity/tenant-activity.component';
import { UserActivityComponent } from './reports/user-activity/user-activity.component';
import { WeeklySummaryComponent } from './reports/weekly-summary/weekly-summary.component';
import { ReportStylesComponent } from './pages/report-styles/report-styles.component';
import { ReportBuilderComponent } from './pages/report-builder/report-builder.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'manage',
    pathMatch: 'full'
  },
  {
    path: 'manage',
    component: ManageReportsComponent,
  },
  {
    path: 'report-styles',
    component: ReportStylesComponent,
  },
  {
    path: 'report-builder',
    component: ReportBuilderComponent,
  },
  {
    path: 'billing-snapshot',
    component: BillingSnapshotComponent,
  },
  {
    path: 'investor-report',
    component: InvestorReportComponent,
  },
  {
    path: 'monthly-summary',
    component: MonthlySummaryComponent,
  },
  {
    path: 'tenant-activity',
    component: TenantActivityComponent,
  },
  {
    path: 'user-activity',
    component: UserActivityComponent,
  },
  {
    path: 'weekly-summary',
    component: WeeklySummaryComponent,
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutes { }

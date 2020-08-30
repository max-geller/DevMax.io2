import { NgModule } from '@angular/core';
import { CoreModule } from '../../../core/core.module';
import { SharedModule } from '../../../shared/shared.module';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReportsRoutes } from './reports.routes';


import { ManageReportsComponent } from './pages/manage-reports/manage-reports.component';
import { RecentReportsComponent } from './tables/recent-reports/recent-reports.component';
import { ReportStylesComponent } from './pages/report-styles/report-styles.component';
import { ReportTypesComponent } from './tables/report-types/report-types.component';
import { UserActivityComponent } from './reports/user-activity/user-activity.component';
import { TenantActivityComponent } from './reports/tenant-activity/tenant-activity.component';
import { EditReportComponent } from './modals/edit-report/edit-report.component';
import { WeeklySummaryComponent } from './reports/weekly-summary/weekly-summary.component';
import { MonthlySummaryComponent } from './reports/monthly-summary/monthly-summary.component';
import { BillingSnapshotComponent } from './reports/billing-snapshot/billing-snapshot.component';
import { InvestorReportComponent } from './reports/investor-report/investor-report.component';
import { ScheduleReportComponent } from './modals/schedule-report/schedule-report.component';

import { ReportBuilderComponent } from './pages/report-builder/report-builder.component';



@NgModule({
  declarations: [
    ManageReportsComponent,
    RecentReportsComponent,
    ReportStylesComponent,
    ReportTypesComponent,
    UserActivityComponent,
    TenantActivityComponent,
    EditReportComponent,
    WeeklySummaryComponent,
    MonthlySummaryComponent,
    BillingSnapshotComponent,
    InvestorReportComponent,
    ScheduleReportComponent,
    ReportBuilderComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    RouterModule,
    ReportsRoutes
  ],
  entryComponents: [
    // Put Modals Here
    EditReportComponent,
    ScheduleReportComponent,
  ]
})
export class ReportsModule { }


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { SharedModule } from './../shared/shared.module';
import { RouterModule } from '@angular/router';
import { AdminRoutes } from './admin.routes';

import { UsersModule } from './modules/users/users.module';
import { TenantsModule } from './modules/tenants/tenants.module';
import { RolesModule } from './modules/roles/roles.module';
import { ReportsModule } from './modules/reports/reports.module';
import { SubscriptionsModule } from './modules/subscriptions/subscriptions.module';
import { AdminLayoutModule } from './layout/admin-layout/admin-layout.module';

import { FakerService } from './../shared/services/faker.service';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UserActivityComponent } from './components/widgets/user-activity/user-activity.component';
import { EngagementSummaryComponent } from './components/widgets/engagement-summary/engagement-summary.component';
import { DeploymentSummaryComponent } from './components/widgets/deployment-summary/deployment-summary.component';
import { ApplicationStatusComponent } from './components/widgets/application-status/application-status.component';
import { DatabaseStatusComponent } from './components/widgets/database-status/database-status.component';
import { ActiveSubscriptionsComponent } from './components/widgets/active-subscriptions/active-subscriptions.component';
import { AppSettingsComponent } from './pages/app-settings/app-settings.component';
import { AdminActionsComponent } from './components/widgets/admin-actions/admin-actions.component';
import { AnalyticsComponent } from './pages/analytics/analytics.component';



@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    RouterModule,
    AdminRoutes,
    AdminLayoutModule,
    TenantsModule,
    UsersModule,
    RolesModule,
    SubscriptionsModule,
    ReportsModule
  ],
  declarations: [
    DashboardComponent,
    UserActivityComponent,
    EngagementSummaryComponent,
    DeploymentSummaryComponent,
    ApplicationStatusComponent,
    DatabaseStatusComponent,
    ActiveSubscriptionsComponent,
    AppSettingsComponent,
    AdminActionsComponent,
    AnalyticsComponent,
  ],
  providers: [
    FakerService
  ],
  entryComponents: [
    // Put Modals Here
  ]

})
export class AdminModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../../core/core.module';
import { SharedModule } from '../../../shared/shared.module';
import { RouterModule } from '@angular/router';

import { UsersRoutes } from './users.routes';
import { UserLogComponent } from './pages/user-log/user-log.component';
import { ManageUsersComponent } from './pages/manage-users/manage-users.component';
import { UserAnalyticsComponent } from './pages/user-analytics/user-analytics.component';
import { UserListComponent } from './tables/user-list/user-list.component';
import { AddUserComponent } from './modals/add-user/add-user.component';
import { EditUserComponent } from './modals/edit-user/edit-user.component';
import { UserService } from '../../../core/services/user.service';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';

@NgModule({
  declarations: [
    UserLogComponent,
    ManageUsersComponent,
    UserAnalyticsComponent,
    UserListComponent,
    AddUserComponent,
    EditUserComponent,
    UserDetailComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    RouterModule,
    UsersRoutes
  ],
  providers: [
    UserService
  ],
  entryComponents: [
    // Put Modals Here
    AddUserComponent,
    EditUserComponent
  ]
})
export class UsersModule { }

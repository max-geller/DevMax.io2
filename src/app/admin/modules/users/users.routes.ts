import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageUsersComponent } from './pages/manage-users/manage-users.component';
import { UserAnalyticsComponent } from './pages/user-analytics/user-analytics.component';
import { UserLogComponent } from './pages/user-log/user-log.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'manage',
    pathMatch: 'full'
  },
  {
    path: 'manage',
    component: ManageUsersComponent
  },

  {
    path: 'analytics',
    component: UserAnalyticsComponent
  },

  {
    path: 'logs',
    component: UserLogComponent
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
export class UsersRoutes { }

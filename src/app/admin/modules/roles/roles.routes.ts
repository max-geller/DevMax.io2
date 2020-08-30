import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageRolesComponent } from './pages/manage-roles/manage-roles.component';
import { PermissionsComponent } from './pages/permissions/permissions.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'manage',
    pathMatch: 'full'
  },
  {
    path: 'manage',
    component: ManageRolesComponent
  },
  {
    path: 'permissions',
    component: PermissionsComponent
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
export class RolesRoutes { }

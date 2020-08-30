import { RolesRoutes } from './roles.routes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { CoreModule } from '../../../core/core.module';

import { EditRoleComponent } from './modals/edit-role/edit-role.component';
import { RolesListComponent } from './tables/roles-list/roles-list.component';
import { AddRoleComponent } from './modals/add-role/add-role.component';
import { PermissionsComponent } from './pages/permissions/permissions.component';
import { ManageRolesComponent } from './pages/manage-roles/manage-roles.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AddRoleComponent,
    EditRoleComponent,
    RolesListComponent,
    PermissionsComponent,
    ManageRolesComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    RouterModule,
    RolesRoutes,
  ],
  entryComponents: [
    // Put Modals Here
    AddRoleComponent,
    EditRoleComponent,
  ]
})
export class RolesModule { }

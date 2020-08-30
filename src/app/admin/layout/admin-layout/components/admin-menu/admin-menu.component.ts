import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AddUserComponent } from '../../../../modules/users/modals/add-user/add-user.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddTenantComponent } from '../../../../modules/tenants/modals/add-tenant/add-tenant.component';
import { UserService } from './../../../../../core/services/user.service';
import { TenantService } from './../../../../../core/services/tenant.service';

@Component({
  selector: 'admin-admin-menu',
  templateUrl: './admin-menu.component.html',
})
export class AdminMenuComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    public userService: UserService,
    public tenantService: TenantService,
  ) {
  }

  ngOnInit(): void {
  }

  addUser() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.maxHeight = "95vh";
    dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(AddUserComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      data => this.userService.createUser(data));
  }

  addTenant(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.maxHeight = "95vh";
    dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(AddTenantComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      data => this.tenantService.createTenant(data));
  }
}

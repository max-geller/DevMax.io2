
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { LogService } from './services/log.service';
import { LayoutService } from './services/layout.service';
import { FirstUseService } from './helpers/first-use.service';
import { EmailService } from './services/email.service';
import { CookieService } from './helpers/cookie.service';
import { AvatarService } from './helpers/avatar.service';
import { NotificationService } from './services/notification.service';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule
  ],
  providers: [
    AuthService,
    AvatarService,
    CookieService,
    EmailService,
    FirstUseService,
    LayoutService,
    LogService,
    NotificationService,
    UserService
],
})
export class CoreModule { }

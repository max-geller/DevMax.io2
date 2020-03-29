import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SessionsRoutes } from './sessions.routes';

import { LoginComponent } from './login/login.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { RegisterComponent } from './register/register.component';
import { SessionsLayoutComponent } from '../shared/layouts/sessions-layout/sessions-layout.component';
import { NotPermittedComponent } from './not-permitted/not-permitted.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    SessionsRoutes
  ],

  declarations: [
    SessionsLayoutComponent,
    LoginComponent,
    ForgotPassComponent,
    PrivacyComponent,
    RegisterComponent,
    NotPermittedComponent
  ],
  providers: [
  ]
})
export class SessionsModule { }

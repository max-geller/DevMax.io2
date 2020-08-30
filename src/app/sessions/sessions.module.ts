import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ResetPassComponent } from './pages/reset-pass/reset-pass.component';
import { VerifyComponent } from './pages/verify/verify.component';
import { SetupComponent } from './pages/setup/setup.component';
import { SessionsRoutes } from './sessions.routes';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    ResetPassComponent,
    VerifyComponent,
    SetupComponent
  ],
  imports: [
    CommonModule,
    SessionsRoutes,
    RouterModule,
    CoreModule,
    SharedModule

  ]
})
export class SessionsModule { }

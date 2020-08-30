import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ResetPassComponent } from './pages/reset-pass/reset-pass.component';
import { VerifyComponent } from './pages/verify/verify.component';
import { SetupComponent } from './pages/setup/setup.component';



@NgModule({
  declarations: [LoginComponent, SignupComponent, ResetPassComponent, VerifyComponent, SetupComponent],
  imports: [
    CommonModule,

  ]
})
export class SessionsModule { }

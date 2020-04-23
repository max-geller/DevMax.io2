import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared.module';

import { AuthLayoutComponent } from './auth-layout.component';

@NgModule({
  declarations: [
    AuthLayoutComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
  ]
})

export class AuthLayoutModule { }

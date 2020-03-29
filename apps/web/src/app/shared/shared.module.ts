import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavModule } from './navigation/nav.module';
import { LayoutsModule } from './layouts/layouts.module';

@NgModule({
  imports: [
    CommonModule,
    NavModule,
    LayoutsModule
  ],
  declarations: []
})
export class SharedModule { }

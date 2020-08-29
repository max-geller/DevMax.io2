
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './vendors/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxEchartsModule } from 'ngx-echarts';
import { GoogleChartsModule } from 'angular-google-charts';
import { ToastrModule } from 'ngx-toastr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GridsterModule } from 'angular-gridster2';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { NgxPageScrollModule } from 'ngx-page-scroll';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    GridsterModule,
    NgxEchartsModule,
    GoogleChartsModule,
    ToastrModule,
    NgbModule,
    NgxPageScrollCoreModule.forRoot({ duration: 1200 }),
    NgxPageScrollModule
  ],
  declarations: [
],
  exports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    GridsterModule,
    NgxEchartsModule,
    GoogleChartsModule,
    NgxPageScrollCoreModule,
    NgxPageScrollModule,
    ToastrModule,
    NgbModule,
  ]
})
export class SharedModule { }

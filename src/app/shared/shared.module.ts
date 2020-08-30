import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './vendors/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { GoogleChartsModule } from 'angular-google-charts';
import { ConfirmDeleteComponent } from './components/modals/confirm-delete/confirm-delete.component';
import * as echarts from 'echarts';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { NgxPageScrollModule } from 'ngx-page-scroll';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    GoogleChartsModule,

    AgmCoreModule.forRoot({ apiKey: 'AIzaSyCYTxkREIgB7sNozUDIhlVNNDwXg9SS3wk' }),
    NgxPageScrollCoreModule.forRoot({ duration: 800 }),
    NgxPageScrollModule
  ],
  declarations: [
    ConfirmDeleteComponent
  ],
  exports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    GoogleChartsModule,
    NgxEchartsModule,
    AgmCoreModule,
    NgxPageScrollCoreModule,
    NgxPageScrollModule
  ]
})
export class SharedModule { }

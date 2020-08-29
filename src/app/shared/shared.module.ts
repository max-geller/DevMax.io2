
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
import { NavbarComponent } from './nav/navbar/navbar.component';
import { FooterComponent } from './nav/footer/footer.component';
import { IconMenuComponent } from './nav/icon-menu/icon-menu.component';
import { SidenavComponent } from './nav/sidenav/sidenav.component';

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
    ToastrModule,
    NgbModule,
  ]
})
export class SharedModule { }

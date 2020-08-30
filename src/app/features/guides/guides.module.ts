import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuidesRoutes } from './guides.routes';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';
import { GuideListComponent } from './pages/guide-list/guide-list.component';
import { GuideDetailComponent } from './pages/guide-detail/guide-detail.component';
import { GuideFilterComponent } from './components/guide-filter/guide-filter.component';


@NgModule({
  declarations: [
    GuideListComponent,
    GuideDetailComponent,
    GuideFilterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    GuidesRoutes
  ]
})
export class GuidesModule { }

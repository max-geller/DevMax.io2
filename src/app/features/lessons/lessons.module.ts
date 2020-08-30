import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LessonsRoutes } from './lessons.routes';
import { LessonsComponent } from './lessons.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [
    LessonsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    LessonsRoutes
  ]
})
export class LessonsModule { }

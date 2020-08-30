import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { LessonsRoutes } from './lessons.routes';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    RouterModule,
    LessonsRoutes
  ]
})
export class LessonsModule { }

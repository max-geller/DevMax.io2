import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutes } from './courses.routes';
import { CourseDetailComponent } from './pages/course-detail/course-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';
import { CoursesComponent } from './courses.component';


@NgModule({
  declarations: [
    CoursesComponent,
    CourseDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    CoursesRoutes
  ]
})
export class CoursesModule { }

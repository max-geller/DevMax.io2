import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutes } from './courses.routes';
import { CourseDetailComponent } from './pages/course-detail/course-detail.component';


@NgModule({
  declarations: [CourseDetailComponent],
  imports: [
    CommonModule,
    CoursesRoutes
  ]
})
export class CoursesModule { }

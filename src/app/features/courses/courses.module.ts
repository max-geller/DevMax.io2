import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutes } from './courses.routes';
import { CourseDetailComponent } from './pages/course-detail/course-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';
import { CoursesComponent } from './courses.component';
import { CourseFilterComponent } from './components/course-filter/course-filter.component';
import { CourseSummaryComponent } from './components/course-summary/course-summary.component';
import { CourseContentComponent } from './components/course-content/course-content.component';
import { FeaturedReviewComponent } from './components/featured-review/featured-review.component';
import { AlsoBoughtComponent } from './components/also-bought/also-bought.component';
import { InstructorBioComponent } from './components/instructor-bio/instructor-bio.component';
import { StudentFeedbackComponent } from './components/student-feedback/student-feedback.component';
import { CourseReviewsComponent } from './components/course-reviews/course-reviews.component';
import { CourseSidebarComponent } from './components/course-sidebar/course-sidebar.component';


@NgModule({
  declarations: [
    CoursesComponent,
    CourseDetailComponent,
    CourseFilterComponent,
    CourseSummaryComponent,
    CourseContentComponent,
    FeaturedReviewComponent,
    AlsoBoughtComponent,
    InstructorBioComponent,
    StudentFeedbackComponent,
    CourseReviewsComponent,
    CourseSidebarComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    CoursesRoutes
  ]
})
export class CoursesModule { }
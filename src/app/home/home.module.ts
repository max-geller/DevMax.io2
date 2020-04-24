import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { FeedComponent } from './components/feed/feed.component';
import { BrowseTagsComponent } from './components/browse-tags/browse-tags.component';
import { BrowseCoursesComponent } from './components/browse-courses/browse-courses.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { StatsComponent } from './components/stats/stats.component';

@NgModule({
      declarations: [
        FeedComponent,
        BrowseTagsComponent,
        BrowseCoursesComponent,
        ReviewsComponent,
        StatsComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
    ]
})
export class HomeModule { }

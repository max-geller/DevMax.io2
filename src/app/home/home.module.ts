import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { FeedComponent } from './components/feed/feed.component';
import { BrowseTagsComponent } from './components/browse-tags/browse-tags.component';
import { BrowseCoursesComponent } from './components/browse-courses/browse-courses.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { StatsComponent } from './components/stats/stats.component';
import { CtaComponent } from './components/cta/cta.component';
import { HomeComponent } from './home.component';
import { BannerComponent } from './components/banner/banner.component';
import { CoreModule } from '../core/core.module';

@NgModule({
      declarations: [
        HomeComponent,
        FeedComponent,
        BrowseTagsComponent,
        BrowseCoursesComponent,
        ReviewsComponent,
        StatsComponent,
        CtaComponent,
        BannerComponent
    ],
    imports: [
        CommonModule,
        CoreModule,
        SharedModule,
    ]
})
export class HomeModule { }

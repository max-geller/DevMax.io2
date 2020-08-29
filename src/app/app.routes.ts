import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TopicsComponent } from './features/topics/topics.component';
import { LessonsComponent } from './features/lessons/lessons.component';
import { CoursesComponent } from './features/courses/courses.component';
import { ArticlesComponent } from './features/articles/articles.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'articles',
    component: ArticlesComponent
  },
  {
    path: 'courses',
    component: CoursesComponent
  },
  {
    path: 'lessons',
    component: LessonsComponent
  },
  {
    path: 'topics',
    component: TopicsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutes { }

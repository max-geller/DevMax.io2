import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { TopicsComponent } from './pages/topics/topics.component';
import { ArticlesComponent } from './features/articles/articles.component';
import { AboutComponent } from './pages/about/about.component';
import { TagsComponent } from './pages/tags/tags.component';
import { MissionComponent } from './pages/mission/mission.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ProComponent } from './pages/pro/pro.component';
import { StoreComponent } from './pages/store/store.component';


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
    path: 'topics',
    component: TopicsComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'tags',
    component: TagsComponent
  },
  {
    path: 'mission',
    component: MissionComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'store',
    component: StoreComponent
  },
  {
    path: 'pro',
    component: ProComponent
  },
  {
    path: 'courses',
    loadChildren: () => import('./features/courses/courses.module').then(m => m.CoursesModule),
  },
  {
    path: 'guides',
    loadChildren: () => import('./features/guides/guides.module').then(m => m.GuidesModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutes { }

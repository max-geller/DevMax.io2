import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuideListComponent } from './pages/guide-list/guide-list.component';
import { GuideDetailComponent } from './pages/guide-detail/guide-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: GuideListComponent
  },
  {
    path: 'guide/:id',
    component: GuideDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuidesRoutes { }

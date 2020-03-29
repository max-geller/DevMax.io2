import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SessionsLayoutComponent } from './shared/layouts/sessions-layout/sessions-layout.component';
import { NotFoundComponent } from './sessions/not-found/not-found.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'sessions/login',
    pathMatch: 'full'
  },
  {
    path: 'sessions',
    component: SessionsLayoutComponent,
    loadChildren: './sessions/sessions.module#SessionsModule',
    canActivate: []
  },
  {
    path: '**',
    pathMatch: 'full',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutes { }

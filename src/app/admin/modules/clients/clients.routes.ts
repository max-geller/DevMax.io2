import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageClientsComponent } from './pages/manage-clients/manage-clients.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'manage',
    pathMatch: 'full'
  },
  {
    path: 'manage',
    component: ManageClientsComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ClientsRoutes { }

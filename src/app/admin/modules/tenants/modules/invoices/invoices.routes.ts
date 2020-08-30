import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageInvoicesComponent } from './pages/manage-invoices/manage-invoices.component';


const routes: Routes = [
    {
        path: '',
        redirectTo: 'manage',
        pathMatch: 'full'
    },
    {
        path: 'manage',
        component: ManageInvoicesComponent
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
export class InvoicesRoutes { }

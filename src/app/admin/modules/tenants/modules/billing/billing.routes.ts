import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageBillingComponent } from './pages/manage-billing/manage-billing.component';


const routes: Routes = [
    {
        path: '',
        redirectTo: 'manage',
        pathMatch: 'full'
    },
    {
        path: 'manage',
        component: ManageBillingComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class BillingRoutes { }

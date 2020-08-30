import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { CoreModule } from '../../../core/core.module';

import { RouterModule } from '@angular/router';
import { ClientsRoutes } from './clients.routes';

import { AddClientComponent } from './modals/add-client/add-client.component';
import { EditClientComponent } from './modals/edit-client/edit-client.component';
import { ClientListComponent } from './tables/client-list/client-list.component';
import { ManageClientsComponent } from './pages/manage-clients/manage-clients.component';


@NgModule({
    declarations: [
        AddClientComponent,
        EditClientComponent,
        ClientListComponent,
        ManageClientsComponent
    ],
    imports: [
        CommonModule,
        CoreModule,
        SharedModule,
        RouterModule,
        ClientsRoutes,
    ],
    entryComponents: [
        // Put Modals Here
        AddClientComponent,
        EditClientComponent,
      ]
})
export class ClientsModule { }

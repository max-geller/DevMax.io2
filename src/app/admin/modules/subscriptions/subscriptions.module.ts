import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../../core/core.module';
import { SharedModule } from '../../../shared/shared.module';
import { SubscriptionRoutes } from './subscription.routes';
import { RouterModule } from '@angular/router';

import { AddSubscriptionComponent } from './modals/add-subscription/add-subscription.component';
import { EditSubscriptionComponent } from './modals/edit-subscription/edit-subscription.component';
import { SubscriptionDetailsComponent } from './subscription-details/subscription-details.component';
import { ActiveSubscriptionsComponent } from './tables/active-subscriptions/active-subscriptions.component';
import { ManageSubscriptionsComponent } from './pages/manage-subscriptions/manage-subscriptions.component';

@NgModule({
  declarations: [
    AddSubscriptionComponent, 
    EditSubscriptionComponent, 
    SubscriptionDetailsComponent, 
    ActiveSubscriptionsComponent, 
    ManageSubscriptionsComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    RouterModule,
    SubscriptionRoutes,
  ],
  entryComponents: [
    // Put Modals Here
    AddSubscriptionComponent, 
    EditSubscriptionComponent, 
  ]
})
export class SubscriptionsModule { }

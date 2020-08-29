import { InMemoryDbService } from 'angular-in-memory-web-api';

// Import Static Data Sources
import { ProjectsDB } from './db/projects.db';
import { ChatDB } from './db/chat.db';
import { NotificationsDB } from './db/notifications.db';
import { TenantsDB } from './db/tenants.db';
import { EventsDB } from './db/events.db';
import { FilesDB } from './db/files.db';
import { ReceiptsDB } from './db/receipts.db';
import { SubscriptionDB } from './db/subscriptions.db';
import { InvoicesDB } from './db/invoices.db';


export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    return {
      'projects': ProjectsDB.projects,
      'contacts': ChatDB.contacts,
      'chat-collections': ChatDB.chatCollection,
      'chat-user': ChatDB.user,
      'events': EventsDB.event,
      'files': FilesDB.files,
      'notifications': NotificationsDB.notifications,
      'subscription': SubscriptionDB.subscription,
      'invoices': InvoicesDB.invoice,
      'tenants': TenantsDB.tenants,
      'receipts': ReceiptsDB.receipt
    };
  }
}

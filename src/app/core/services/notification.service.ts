import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  public notificationCount = 0;
  notificationDescription: string;

}

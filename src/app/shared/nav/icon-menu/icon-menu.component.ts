import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-icon-menu',
  templateUrl: './icon-menu.component.html',
})
export class IconMenuComponent {
  events: string[] = [];
  opened: boolean;
  email: string;
  password: string;

  constructor(public auth: AuthService, private afs: AngularFirestore) { }
  titles: any[];
  isShowSearch = false;

  get isAuthenticated(): boolean {
    return this.auth.isAuthenticated;
  }

  toggleSearch() {
    this.isShowSearch = !this.isShowSearch;
  }

  signOut() {
    this.auth.signOut();
  }

  openSupport() {
    window.open("https://support.devmax.io", "_blank");
  }

  openLearning() {
    window.open("https://learning.devmax.io", "_blank");
  }

  openDocumentation() {
    window.open("https://docs.devmax.io", "_blank");
  }

  openSlack() {
    window.open("https://devmax.slack.com", "_blank");
  }
}

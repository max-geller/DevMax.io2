import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-guide-list',
  templateUrl: './guide-list.component.html',
})
export class GuideListComponent {
  guides$: Observable<any>;
  constructor(afs: AngularFirestore) {
    this.guides$ = afs.collection('guides', ref => ref.orderBy('id')).valueChanges();
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    //    this.models$.filter = filterValue;
  }
}

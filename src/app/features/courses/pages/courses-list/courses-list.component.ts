import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
})
export class CoursesListComponent {
  courses$: Observable<any>;
  constructor(afs: AngularFirestore) {
    this.courses$ = afs.collection('courses', ref => ref.orderBy('id')).valueChanges();
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    //    this.models$.filter = filterValue;
  }
}

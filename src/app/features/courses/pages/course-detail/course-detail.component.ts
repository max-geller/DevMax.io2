import { CourseInterface } from './../../../../core/models/course.model';

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FirestoreService } from 'src/app/core/services/firestore.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
})
export class CourseDetailComponent implements OnInit {
  public course: CourseInterface = {
    id: null
  };

  constructor(private dataApi: FirestoreService, public afs: AngularFirestore, private route: ActivatedRoute) { }


  ngOnInit() {
    const idCourse = this.route.snapshot.params['id'];
    this.getDetails(idCourse);
    console.log(idCourse);

  }

  getDetails(idCourse: string): void {
    this.dataApi.getOneCourse(idCourse).subscribe(course => {
      this.course = course;

    });
  }

}

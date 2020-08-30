
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { CourseInterface } from './../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private afs: AngularFirestore) { }
  private coursesCollection: AngularFirestoreCollection<CourseInterface>;
  private courses: Observable<CourseInterface[]>;
  private courseDoc: AngularFirestoreDocument<CourseInterface>;
  private course: Observable<CourseInterface>;
  private gallery: Observable<CourseInterface>;
  private galleryDoc: AngularFirestoreDocument<CourseInterface>;
  public selectedCourse: CourseInterface = {
    id: null,

  };

  getAllCourses() {
    this.coursesCollection = this.afs.collection<CourseInterface>('courses');
    return this.courses = this.coursesCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as CourseInterface;

          data.id = action.payload.doc.id;
          console.log(data);
          return data;

        });
      }));
  }
  


  getOneCourse(idCourse: string) {
    this.courseDoc = this.afs.doc<CourseInterface>(`courses/${idCourse}`);
    return this.course = this.courseDoc.snapshotChanges().pipe(map(action => {
      if (action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data() as CourseInterface;
        console.log(idCourse);
        data.id = action.payload.id;
        return data;
      }
    }));
  }

  getOneGallery(idGallery: string) {
    this.galleryDoc = this.afs.doc<CourseInterface>(`galleries/${idGallery}`);
    return this.gallery = this.galleryDoc.snapshotChanges().pipe(map(action => {
      if (action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data() as CourseInterface;
        console.log(idGallery);
        data.id = action.payload.id;
        return data;
      }
    }));
  }
  getAllGalleries() {
    this.coursesCollection = this.afs.collection<CourseInterface>('courses');
    return this.courses = this.coursesCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as CourseInterface;

          data.id = action.payload.doc.id;
          console.log(data);
          return data;

        });
      }));
  }
}

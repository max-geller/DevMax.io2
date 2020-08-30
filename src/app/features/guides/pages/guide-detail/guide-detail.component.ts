import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FirestoreService } from 'src/app/core/services/firestore.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { GuideInterface } from './../../../../core/models/guide.model';

@Component({
  selector: 'app-guide-detail',
  templateUrl: './guide-detail.component.html',
})
export class GuideDetailComponent implements OnInit {
  public guide: GuideInterface = {
    id: null
  };

  constructor(private dataApi: FirestoreService, public afs: AngularFirestore, private route: ActivatedRoute) { }


  ngOnInit() {
    const idGuide = this.route.snapshot.params['id'];
    this.getDetails(idGuide);
    console.log(idGuide);

  }

  getDetails(idGuide: string): void {
    this.dataApi.getOneCourse(idGuide).subscribe(guide => {
      this.guide = guide;

    });
  }

}

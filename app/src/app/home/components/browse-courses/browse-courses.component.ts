import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-browse-courses',
  templateUrl: './browse-courses.component.html',
  styleUrls: ['./browse-courses.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BrowseCoursesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

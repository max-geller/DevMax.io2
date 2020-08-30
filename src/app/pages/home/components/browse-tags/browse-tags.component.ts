import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-browse-tags',
  templateUrl: './browse-tags.component.html',
  styleUrls: ['./browse-tags.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BrowseTagsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

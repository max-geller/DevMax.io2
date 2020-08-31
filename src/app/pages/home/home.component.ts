import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PageScrollService, EasingLogic, PageScrollInstance } from 'ngx-page-scroll-core';

@Component({
  templateUrl: './home.component.html',
})


export class HomeComponent {
  @ViewChild('basicContainer')
  public basicContainer: ElementRef;

  constructor(private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any) { }




  public scrollInsideBasic(): void {
    const pageScrollInstance: PageScrollInstance = this.pageScrollService.create({
      document: this.document,
      scrollTarget: '#basicScrollTarget',
      scrollViews: [this.basicContainer.nativeElement],
    });
    this.pageScrollService.start(pageScrollInstance);
  }
}
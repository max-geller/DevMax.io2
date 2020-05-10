import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseTagsComponent } from './browse-tags.component';

describe('BrowseTagsComponent', () => {
  let component: BrowseTagsComponent;
  let fixture: ComponentFixture<BrowseTagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseTagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedReviewComponent } from './featured-review.component';

describe('FeaturedReviewComponent', () => {
  let component: FeaturedReviewComponent;
  let fixture: ComponentFixture<FeaturedReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

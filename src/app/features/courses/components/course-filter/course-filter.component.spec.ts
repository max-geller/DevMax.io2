import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseFilterComponent } from './course-filter.component';

describe('CourseFilterComponent', () => {
  let component: CourseFilterComponent;
  let fixture: ComponentFixture<CourseFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

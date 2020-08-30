import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorBioComponent } from './instructor-bio.component';

describe('InstructorBioComponent', () => {
  let component: InstructorBioComponent;
  let fixture: ComponentFixture<InstructorBioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructorBioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

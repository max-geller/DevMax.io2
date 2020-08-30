import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportTypesComponent } from './report-types.component';

describe('ReportTypesComponent', () => {
  let component: ReportTypesComponent;
  let fixture: ComponentFixture<ReportTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

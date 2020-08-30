import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportStylesComponent } from './report-styles.component';

describe('ReportStylesComponent', () => {
  let component: ReportStylesComponent;
  let fixture: ComponentFixture<ReportStylesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportStylesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportStylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

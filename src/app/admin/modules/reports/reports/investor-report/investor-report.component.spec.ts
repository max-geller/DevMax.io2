import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorReportComponent } from './investor-report.component';

describe('InvestorReportComponent', () => {
  let component: InvestorReportComponent;
  let fixture: ComponentFixture<InvestorReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestorReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestorReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

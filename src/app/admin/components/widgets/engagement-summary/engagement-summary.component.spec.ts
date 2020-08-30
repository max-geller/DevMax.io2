import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngagementSummaryComponent } from './engagement-summary.component';

describe('EngagementSummaryComponent', () => {
  let component: EngagementSummaryComponent;
  let fixture: ComponentFixture<EngagementSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngagementSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngagementSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

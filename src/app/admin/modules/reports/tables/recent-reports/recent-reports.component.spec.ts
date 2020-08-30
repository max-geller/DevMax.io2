import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentReportsComponent } from './recent-reports.component';

describe('RecentReportsComponent', () => {
  let component: RecentReportsComponent;
  let fixture: ComponentFixture<RecentReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

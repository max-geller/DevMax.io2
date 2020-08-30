import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAnalyticsComponent } from './user-analytics.component';

describe('UserAnalyticsComponent', () => {
  let component: UserAnalyticsComponent;
  let fixture: ComponentFixture<UserAnalyticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAnalyticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

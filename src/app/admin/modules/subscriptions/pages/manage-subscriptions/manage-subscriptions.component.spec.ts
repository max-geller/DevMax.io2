import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSubscriptionsComponent } from './manage-subscriptions.component';

describe('ManageSubscriptionsComponent', () => {
  let component: ManageSubscriptionsComponent;
  let fixture: ComponentFixture<ManageSubscriptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageSubscriptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageSubscriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

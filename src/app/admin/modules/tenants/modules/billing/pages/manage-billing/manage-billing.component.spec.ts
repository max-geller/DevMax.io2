import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageBillingComponent } from './manage-billing.component';

describe('ManageBillingComponent', () => {
  let component: ManageBillingComponent;
  let fixture: ComponentFixture<ManageBillingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageBillingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBillingComponent } from './add-billing.component';

describe('AddBillingComponent', () => {
  let component: AddBillingComponent;
  let fixture: ComponentFixture<AddBillingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBillingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

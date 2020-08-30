import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBillingComponent } from './edit-billing.component';

describe('EditBillingComponent', () => {
  let component: EditBillingComponent;
  let fixture: ComponentFixture<EditBillingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBillingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

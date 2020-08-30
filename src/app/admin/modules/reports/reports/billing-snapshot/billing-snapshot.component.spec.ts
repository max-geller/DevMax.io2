import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingSnapshotComponent } from './billing-snapshot.component';

describe('BillingSnapshotComponent', () => {
  let component: BillingSnapshotComponent;
  let fixture: ComponentFixture<BillingSnapshotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillingSnapshotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingSnapshotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

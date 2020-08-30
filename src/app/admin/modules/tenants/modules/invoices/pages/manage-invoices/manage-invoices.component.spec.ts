import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageInvoicesComponent } from './manage-invoices.component';

describe('ManageInvoicesComponent', () => {
  let component: ManageInvoicesComponent;
  let fixture: ComponentFixture<ManageInvoicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageInvoicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

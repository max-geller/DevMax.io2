import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantActivityComponent } from './tenant-activity.component';

describe('TenantActivityComponent', () => {
  let component: TenantActivityComponent;
  let fixture: ComponentFixture<TenantActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenantActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

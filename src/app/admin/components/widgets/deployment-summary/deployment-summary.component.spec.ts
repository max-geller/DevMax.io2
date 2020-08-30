import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeploymentSummaryComponent } from './deployment-summary.component';

describe('DeploymentSummaryComponent', () => {
  let component: DeploymentSummaryComponent;
  let fixture: ComponentFixture<DeploymentSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeploymentSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeploymentSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadGatewayComponent } from './bad-gateway.component';

describe('BadGatewayComponent', () => {
  let component: BadGatewayComponent;
  let fixture: ComponentFixture<BadGatewayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadGatewayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadGatewayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlsoBoughtComponent } from './also-bought.component';

describe('AlsoBoughtComponent', () => {
  let component: AlsoBoughtComponent;
  let fixture: ComponentFixture<AlsoBoughtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlsoBoughtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlsoBoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

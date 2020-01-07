import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskappetiteComponent } from './riskappetite.component';

describe('RiskappetiteComponent', () => {
  let component: RiskappetiteComponent;
  let fixture: ComponentFixture<RiskappetiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiskappetiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskappetiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

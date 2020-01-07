import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiaComponent } from './bia.component';

describe('BiaComponent', () => {
  let component: BiaComponent;
  let fixture: ComponentFixture<BiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

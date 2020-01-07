import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KtBiaSideNavComponent } from './kt-bia-side-nav.component';

describe('KtBiaSideNavComponent', () => {
  let component: KtBiaSideNavComponent;
  let fixture: ComponentFixture<KtBiaSideNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KtBiaSideNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KtBiaSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

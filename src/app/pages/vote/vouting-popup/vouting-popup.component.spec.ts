import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoutingPopupComponent } from './vouting-popup.component';

describe('VoutingPopupComponent', () => {
  let component: VoutingPopupComponent;
  let fixture: ComponentFixture<VoutingPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoutingPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoutingPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

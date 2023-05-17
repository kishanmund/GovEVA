import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyPopupComponent } from './apply-popup.component';

describe('ApplyPopupComponent', () => {
  let component: ApplyPopupComponent;
  let fixture: ComponentFixture<ApplyPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

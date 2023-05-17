import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliedPositionsComponent } from './applied-positions.component';

describe('AppliedPositionsComponent', () => {
  let component: AppliedPositionsComponent;
  let fixture: ComponentFixture<AppliedPositionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppliedPositionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppliedPositionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

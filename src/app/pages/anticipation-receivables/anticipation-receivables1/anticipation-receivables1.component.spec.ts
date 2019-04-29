import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnticipationReceivables1Component } from './anticipation-receivables1.component';

describe('AnticipationReceivables1Component', () => {
  let component: AnticipationReceivables1Component;
  let fixture: ComponentFixture<AnticipationReceivables1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnticipationReceivables1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnticipationReceivables1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

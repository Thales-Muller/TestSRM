import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnticipationReceivables3Component } from './anticipation-receivables3.component';

describe('AnticipationReceivables3Component', () => {
  let component: AnticipationReceivables3Component;
  let fixture: ComponentFixture<AnticipationReceivables3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnticipationReceivables3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnticipationReceivables3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

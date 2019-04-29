import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnticipationReceivables2Component } from './anticipation-receivables2.component';

describe('AnticipationReceivables2Component', () => {
  let component: AnticipationReceivables2Component;
  let fixture: ComponentFixture<AnticipationReceivables2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnticipationReceivables2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnticipationReceivables2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

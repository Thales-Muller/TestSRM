import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnticipationReceivables1Component } from './anticipation-receivables1/anticipation-receivables1.component';
import { AnticipationReceivables2Component } from './anticipation-receivables2/anticipation-receivables2.component';
import { AnticipationReceivables3Component } from './anticipation-receivables3/anticipation-receivables3.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AnticipationReceivables1Component,
    AnticipationReceivables2Component,
    AnticipationReceivables3Component
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    AnticipationReceivables1Component,
    AnticipationReceivables2Component,
    AnticipationReceivables3Component
  ]
})
export class AnticipationReceivablesModule { }

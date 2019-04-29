import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Pages */
import { ManagementPanelComponent } from './pages/management-panel/management-panel.component';
import { DigitalAccountComponent } from './pages/digital-account/digital-account.component';
import { AnticipationReceivables1Component } from './pages/anticipation-receivables/anticipation-receivables1/anticipation-receivables1.component';
import { AnticipationReceivables2Component } from './pages/anticipation-receivables/anticipation-receivables2/anticipation-receivables2.component';
import { AnticipationReceivables3Component } from './pages/anticipation-receivables/anticipation-receivables3/anticipation-receivables3.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'painel-gestao',
    pathMatch: 'full'
  },
  {
    path: '',
    component: ManagementPanelComponent
  },
  {
    path: 'painel-gestao',
    component: ManagementPanelComponent
  },
  {
    path: 'conta-digital',
    component: DigitalAccountComponent
  },
  {
    path: 'ant-recebiveis1',
    component: AnticipationReceivables1Component
  },
  {
    path:'ant-recebiveis2',
    component: AnticipationReceivables2Component
  },
  {
    path:'ant-recebiveis3',
    component: AnticipationReceivables3Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

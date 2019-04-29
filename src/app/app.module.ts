import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Compoenents & Module
import { ComponentsModule } from './components/components.module';
import { ManagementPanelComponent } from './pages/management-panel/management-panel.component';
import { DigitalAccountComponent } from './pages/digital-account/digital-account.component';
import { AnticipationReceivablesModule } from './pages/anticipation-receivables/anticipation-receivables.module';

//Services
import { StorageService } from './services/storage/storage.service';
import { StorageServiceModule } from 'angular-webstorage-service';

@NgModule({
  declarations: [
    AppComponent,
    ManagementPanelComponent,
    DigitalAccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    StorageServiceModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule, 
    AnticipationReceivablesModule
  ],
  providers: [
    StorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

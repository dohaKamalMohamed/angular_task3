import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './myComponent/log-in/log-in.component';
import { RegisterComponent } from './myComponent/register/register.component';
import { ForgetPassComponent } from './myComponent/forget-pass/forget-pass.component';
import { DashboardComponent } from './myComponent/dashboard/dashboard.component';
import { UsersComponent } from './myComponent/users/users.component';
import { ModuelsComponent } from './myComponent/moduels/moduels.component';
import { ChartsComponent } from './myComponent/charts/charts.component';
import { ChartsModule } from 'ng2-charts';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead'
@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    RegisterComponent,
    ForgetPassComponent,
    DashboardComponent,
    UsersComponent,
    ModuelsComponent,
    ChartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CustomFormsModule,
    ChartsModule,
    Ng2SmartTableModule,
    NgbModule,
    BrowserAnimationsModule,
    MaterialModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    TypeaheadModule.forRoot() 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

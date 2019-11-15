import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EmpListComponent } from './emp-list/emp-list.component';
import { EmpEditComponent } from './emp-edit/emp-edit.component';
import { EmpCreateComponent } from './emp-create/emp-create.component'
import {EmployeeService} from './employee.service'

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EmpListComponent,
    EmpEditComponent,
    EmpCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

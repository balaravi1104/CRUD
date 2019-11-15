import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpListComponent } from './emp-list/emp-list.component';
import { EmpEditComponent } from './emp-edit/emp-edit.component';
import { EmpCreateComponent } from './emp-create/emp-create.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-employee' },
  { path: 'create-employee', component: EmpCreateComponent },
  { path: 'edit-employee/:id', component: EmpEditComponent },
  { path: 'employees-list', component: EmpListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

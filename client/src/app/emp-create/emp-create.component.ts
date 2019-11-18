import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
Router
@Component({
  selector: 'app-emp-create',
  templateUrl: './emp-create.component.html',
  styleUrls: ['./emp-create.component.css']
})
export class EmpCreateComponent implements OnInit {
  submitted = false;
  employeeForm: FormGroup;
  EmployeeProfile:any = ['engineer', 'sr.engineer', 'HR', 'TeamLeader', 'ProjectManager']
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private employeeservice: EmployeeService,

  ) { this.mainForm(); }

  ngOnInit() {
  }
  mainForm() {
    this.employeeForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      designation: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    });
  }
  updateProfile(e) {
    this.employeeForm.get('designation').setValue(e, {
      onlySelf: true
    });
  }
  get myForm(){
    return this.employeeForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (!this.employeeForm.valid) {
      return false;
    } else {
      // this.employeeservice.createEmp(this.employeeForm.value);
      // console.log('Employee successfully created!');
      // this.router.navigateByUrl('/employees-list');
      this.employeeservice.createEmp(this.employeeForm.value).subscribe(
        (res) => {
          console.log('Employee successfully created!')
          this.router.navigateByUrl('/employees-list')
        }, (error) => {
          console.log(error);
        });
        }

  }


}

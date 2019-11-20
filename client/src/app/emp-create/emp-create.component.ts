import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp-create',
  templateUrl: './emp-create.component.html',
  styleUrls: ['./emp-create.component.css']
})
export class EmpCreateComponent implements OnInit {
  public submitted = false;
  employeeForm: FormGroup;
  EmployeeProfile: any = ['engineer', 'sr.engineer', 'HR', 'TeamLeader', 'ProjectManager']
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private employeeservice: EmployeeService,

  ) {
     this.mainForm();
    }

  ngOnInit() {}
  mainForm() {
    this.employeeForm = this.fb.group({
      name : ['', [Validators.required, Validators.pattern('[a-z]+$')]],
      email : ['', [Validators.required, Validators.email]],
      designation : ['', [Validators.required]],
      phoneNumber : ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]]
    });
  }
  updateProfile(e) {
    this.employeeForm.get('designation').setValue(e, {
      onlySelf: true
    });
  }
  get myForm() {
    return this.employeeForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    console.log(this.submitted)
    if (!this.employeeForm.valid) {
      return false;
    } else {
      // this.employeeservice.createEmp(this.employeeForm.value);
      // console.log('Employee successfully created!');
      // this.router.navigateByUrl('/employees-list');
      this.employeeservice.createEmp(this.employeeForm.value).subscribe(
        (res) => {
          console.log('Employee successfully created!');
          this.router.navigateByUrl('/employees-list');
        }, (error) => {
          console.log(error);
        });
        }

  }


}

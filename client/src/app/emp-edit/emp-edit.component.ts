import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-emp-edit',
  templateUrl: './emp-edit.component.html',
  styleUrls: ['./emp-edit.component.css'],
})
export class EmpEditComponent implements OnInit {
  submitted = false;
  editForm: FormGroup;
  employeeData: Employee[];
  EmployeeProfile: any = ['engineer', 'sr.engineer', 'HR', 'TeamLeader', 'ProjectManager'];
  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private router: Router,
    private employeeservice: EmployeeService
  ) {}

  ngOnInit() {
    this.updateEmployee();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getEmployee(id);
    this.editForm = this.fb.group({
      name: ['', [Validators.required,Validators.pattern('^[a-z]+$')]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')]],
      designation: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
    });
  }
  updateProfile(e) {
    this.editForm.get('designation').setValue(e, {
      onlySelf: true,
    });
  }

  // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }

  getEmployee(id) {
    this.employeeservice.getEmp(id).subscribe(data => {
      this.editForm.setValue({
        name: data['name'],
        email: data['email'],
        designation: data['designation'],
        phoneNumber: data['phoneNumber'],
      });
    });
  }

  updateEmployee() {
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')]],
      designation: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.employeeservice.updateEmp(id, this.editForm.value).subscribe(
          res => {
            this.router.navigateByUrl('/employees-list');
            console.log('Content updated successfully!');
          },
          error => {
            console.log(error);
          }
        );
      }
    }
  }
}

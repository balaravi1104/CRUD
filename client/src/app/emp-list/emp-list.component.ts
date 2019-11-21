import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "../employee.service";

@Component({
  selector: "app-emp-list",
  templateUrl: "./emp-list.component.html",
  styleUrls: ["./emp-list.component.css"]
})
export class EmpListComponent implements OnInit {
  Employee: any = [];
  searchText;
  constructor(private employeeservice: EmployeeService) {
    this.readEmployee();
  }

  ngOnInit() {}
  readEmployee() {
    this.employeeservice.getAllEmp().subscribe(data => {
      this.Employee = data;
      console.log(this.Employee)
    });
  }

  removeEmployee(employee, index) {
    if (window.confirm("Are you sure?")) {
      this.employeeservice.deleteEmp(employee._id).subscribe(data => {
        this.Employee.splice(index, 1);
      });
    }
  }
}

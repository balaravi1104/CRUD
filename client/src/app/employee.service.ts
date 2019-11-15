import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {}

  createEmp(data) {
    console.log(data);
    return this.http.post(environment.apiBaseUrl + '/create', data);

  }
  getAllEmp() {
    return this.http.get(environment.apiBaseUrl + '/readall');
  }
  getEmp(id) {
    return this.http.get(environment.apiBaseUrl + `/read/${id}`, { headers: this.headers });
  }
  updateEmp(id, data) {
    return this.http.put(environment.apiBaseUrl + `/update/${id}`, data, { headers: this.headers });
  }
  deleteEmp(id) {
    return this.http.delete(environment.apiBaseUrl + `/delete/${id}`, { headers: this.headers });
  }
}

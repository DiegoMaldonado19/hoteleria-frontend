import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee, CreateEmployeeDTO } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiUrl = 'http://127.0.0.1:8000/api/v1';

  constructor(
    private http: HttpClient
  ) { }

  create(dto: CreateEmployeeDTO){
    return this.http.post<Employee>(`${this.apiUrl}/employee`, dto);
  }

  getAll(){
    return this.http.get<Employee[]>(`${this.apiUrl}/employee`);
  }

}

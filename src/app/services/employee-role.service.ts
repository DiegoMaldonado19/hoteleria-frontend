import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeRole, CreateEmployeeRoleDTO } from '../models/employee-role.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeRoleService {

  private apiUrl = 'http://127.0.0.1:8000/api/v1';

  constructor(
    private http: HttpClient
  ) { }

  create(dto: CreateEmployeeRoleDTO){
    return this.http.post<EmployeeRole>(`${this.apiUrl}/employee-role`, dto);
  }

  getAll(){
    return this.http.get<EmployeeRole[]>(`${this.apiUrl}/employee-role`);
  }
}

import { Injectable } from '@angular/core';
import { UserRole, CreateUserRoleDTO } from '../models/user-role.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserRoleService {

  private apiUrl = 'http://127.0.0.1:8000/api/v1';

  constructor(
    private http: HttpClient
  ) { }

  create(dto: CreateUserRoleDTO){
    return this.http.post<UserRole>(`${this.apiUrl}/user-role`, dto);
  }

  getAll(){
    return this.http.get<UserRole[]>(`${this.apiUrl}/user-role`);
  }

}

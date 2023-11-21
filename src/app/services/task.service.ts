import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task, CreateTaskDTO } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'http://127.0.0.1:8000/api/v1';

  constructor(
    private http: HttpClient
  ) { }

  create(dto: CreateTaskDTO){
    return this.http.post<Task>(`${this.apiUrl}/task`, dto);
  }

  getAll(){
    return this.http.get<Task[]>(`${this.apiUrl}/task`);
  }
}

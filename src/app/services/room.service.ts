import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Room, CreateRoomDTO } from '../models/room.model';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private apiUrl = 'http://127.0.0.1:8000/api/v1';

  constructor(
    private http: HttpClient
  ) { }

  create(dto: CreateRoomDTO){
    return this.http.post<Room>(`${this.apiUrl}/room`, dto);
  }

  getAll(){
    return this.http.get<Room[]>(`${this.apiUrl}/room`);
  }
}

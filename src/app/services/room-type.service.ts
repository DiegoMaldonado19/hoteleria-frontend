import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RoomType, CreateRoomTypeDTO } from '../models/room-type.model';

@Injectable({
  providedIn: 'root'
})
export class RoomTypeService {

  private apiUrl = 'http://127.0.0.1:8000/api/v1';

  constructor(
    private http: HttpClient
  ) { }

  create(dto: CreateRoomTypeDTO){
    return this.http.post<RoomType>(`${this.apiUrl}/room-type`, dto);
  }

  getAll(){
    return this.http.get<RoomType[]>(`${this.apiUrl}/room-type`);
  }

}

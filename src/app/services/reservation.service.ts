import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reservation, CreateReservationDTO } from '../models/reservation.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private apiUrl = 'http://127.0.0.1:8000/api/v1';

  constructor(
    private http: HttpClient
  ) { }

  create(dto: CreateReservationDTO){
    return this.http.post<Reservation>(`${this.apiUrl}/reservation`, dto);
  }

  getAll(){
    return this.http.get<Reservation[]>(`${this.apiUrl}/reservation`);
  }

}

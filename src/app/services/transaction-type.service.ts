import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TransactionType, CreateTransactionTypeDTO } from '../models/transaction-type.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionTypeService {

  private apiUrl = 'http://127.0.0.1:8000/api/v1';

  constructor(
    private http: HttpClient
  ) { }

  create(dto: CreateTransactionTypeDTO){
    return this.http.post<TransactionType>(`${this.apiUrl}/transaction-type`, dto);
  }

  getAll(){
    return this.http.get<TransactionType[]>(`${this.apiUrl}/transaction-type`);
  }

}

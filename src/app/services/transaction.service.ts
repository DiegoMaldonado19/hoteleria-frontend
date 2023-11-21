import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transaction, CreateTransactionDTO } from '../models/transaction.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private apiUrl = 'http://127.0.0.1:8000/api/v1';

  constructor(
    private http: HttpClient
  ) { }

  create(dto: CreateTransactionDTO){
    return this.http.post<Transaction>(`${this.apiUrl}/transaction`, dto);
  }

  getAll(){
    return this.http.get<Transaction[]>(`${this.apiUrl}/transaction`);
  }

}

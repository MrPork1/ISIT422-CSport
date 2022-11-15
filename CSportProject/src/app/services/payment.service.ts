import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction } from '../Transaction';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private serverURL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  addTransaction(newPayment: Transaction): Observable<Transaction> {
    return this.http.post<Transaction>(this.serverURL + "/transactioncollection", newPayment, httpOptions);
  }

  getAllTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.serverURL + "/transactioncollections")
  }

}

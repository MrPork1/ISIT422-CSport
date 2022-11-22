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
  } //communication with the node server 

  getAllTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.serverURL + "/transactioncollections")
  }
  editTransaciton(onePayment: Transaction): Observable<Transaction> { 
    return this.http.put<Transaction>(this.serverURL + "/EditTransaction", onePayment, httpOptions);
  }

  deleteTransaction(_id?: string): Observable<Transaction> {
    return this.http.delete<Transaction>(this.serverURL + "/DeleteTransaction/" + _id, httpOptions);
  }

}

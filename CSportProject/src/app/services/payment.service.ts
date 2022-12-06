import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, shareReplay, tap } from 'rxjs';
import { Transaction } from '../Transaction';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  data$!: Observable<Transaction[]> | null;

  private serverURL = environment.apiUrl;

  constructor(private http: HttpClient) { }

  addTransaction(newPayment: Transaction): Observable<Transaction> {
    return this.http.post<Transaction>(this.serverURL + "/transactioncollection", newPayment, httpOptions);
  }

  getAllTransactions(): Observable<Transaction[]> {
    if (!this.data$) {
      console.log('%cCalled server for all transactions', 'background: #000000; color: #FFFFFF');
      this.data$ = this.http.get<Transaction[]>(this.serverURL + "/transactioncollections").pipe(tap(), shareReplay(1), tap());
    }
    return this.data$;
  }

  editTransaciton(onePayment: Transaction): Observable<Transaction> {
    return this.http.put<Transaction>(this.serverURL + "/EditTransaction", onePayment, httpOptions);
  }

  deleteTransaction(_id?: string): Observable<Transaction> {
    return this.http.delete<Transaction>(this.serverURL + "/DeleteTransaction/" + _id, httpOptions);
  }

  public clearTransactionData() {
    this.data$ = null;
  }
}
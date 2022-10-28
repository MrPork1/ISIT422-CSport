import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { User } from '../User';
import { Class } from '../Classes';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersURL = 'http://localhost:3000';

  constructor(private http: HttpClient){ }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersURL + "/usercollections")
    .pipe(
      tap(_ => console.log('fetched users')),
      catchError(this.handleError<[]>('getUsers', []))
    )
  }

  getClasses(): Observable<Class[]> { //temp method. will be moved to class service soon
    return this.http.get<Class[]>(this.usersURL + "/classcollections")
  }

  addUser(user: User): Observable<User> {
    console.log(user);
    return this.http.post<User>(this.usersURL + "/NewUser", user, httpOptions);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
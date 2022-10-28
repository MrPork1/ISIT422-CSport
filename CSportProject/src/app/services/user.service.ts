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

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersURL + "/usercollections")
  }

  getUser(ID?: string): Observable<User[]> {
    console.log(ID);
    return this.http.get<User[]>(this.usersURL + "/GetOneUser/" + ID, httpOptions);
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.usersURL + "/userscollection", user, httpOptions);
  }

  editUser(user: User): Observable<User> { //This doesn't work right now - sean
    console.log(user);
    return this.http.put<User>(this.usersURL + "/EditUser", user, httpOptions);
  }

  deleteUser(ID: string): Observable<User> {
    return this.http.delete<User>(this.usersURL + "/DeleteUser/" + ID, httpOptions);
  }

  getClasses(): Observable<Class[]> { //temp. will get moved friday or saturday - sean
    return this.http.get<Class[]>(this.usersURL + "/classcollections")
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
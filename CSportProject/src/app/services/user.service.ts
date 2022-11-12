import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from '../User';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //When calling these methods, make sure you subscribe to them in your code
  //Example: this.userService.getAllUsers().subscribe();

  //To fill an array from the subscribe, call it like this:
  //Example:  this.userService.getAllUsers().subscribe(users => this.users = users);
  //where this.users is a local array
  //For an example, see admin-dashboard.component.ts line 38

  private serverURL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.serverURL + "/usercollections")
  }

  getUser(ID?: string): Observable<User[]> {
    console.log(ID);
    return this.http.get<User[]>(this.serverURL + "/GetOneUser/" + ID, httpOptions);
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.serverURL + "/userscollection", user, httpOptions);
  }

  editUser(user: User): Observable<User> {
    return this.http.put<User>(this.serverURL + "/EditUser", user, httpOptions);
  }

  deleteUser(ID: string): Observable<User> {
    return this.http.delete<User>(this.serverURL + "/DeleteUser/" + ID, httpOptions);
  }

  deleteUser2(ID?: string): Observable<User> {
    return this.http.delete<User>(this.serverURL + "/DeleteUser2/" + ID, httpOptions);
  }
}
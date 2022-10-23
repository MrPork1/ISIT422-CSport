import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service'; 
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/User';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  user ?: User;
  users: User[] = [];

  constructor(     
    public authService: AuthService,
    private userService: UserService,) {
      

     }

  ngOnInit(): void {
  }
  

  getUsers() {
    this.userService.getUsers().subscribe(users => this.users = users);
  }


}

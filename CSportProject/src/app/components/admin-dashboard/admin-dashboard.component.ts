import { Component, OnInit } from '@angular/core';
import { Class } from 'src/app/Classes';
import { AuthService } from 'src/app/services/auth.service'; 
import { ClassesService } from 'src/app/services/classes.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/User';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  views = [false, false,false, false];

  user ?: User;
  users: User[] = [];

  classes: Class[] = [];

  constructor(     
    public authService: AuthService,
    private userService: UserService,
    private classesService: ClassesService) {}

  ngOnInit(): void {
  }

  setView(num: number): void {
    for (let i = 0; i < this.views.length; i++) {
      this.views[i] = false;
    }

    this.views[num] = true;
  }

  getUsers() {
      this.userService.getAllUsers().subscribe(users => this.users = users);
  }

  getClasses() {
    this.classesService.getAllClasses().subscribe(classes => this.classes = classes);
  }
}
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/User';
import { profile } from '../Profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
    public authService: AuthService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  users: User[] = [];

  getUsers() {
    this.userService.getUsers()
    .subscribe(users => this.users = users);
  }
}

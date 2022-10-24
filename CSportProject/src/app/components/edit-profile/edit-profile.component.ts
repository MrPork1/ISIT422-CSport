import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/User';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  email !: string;
  fname !: string;
  lname !: string;
  bday !: string;
  password !: string;
  
  user !: User;

  constructor(
    private authService: AuthService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.user = this.authService.returnUserObject();
    this.fillValues(this.user);
    console.log(this.user);
  }

  fillValues(user: User) {
    this.email = user.Email;
    this.fname = user.Fname;
    this.lname = user.Lname;
    this.bday = user.Birthday;
  }

  applyChanges() {
    const newUser = this.user;

    newUser.Fname = this.fname;
    newUser.Lname = this.lname;
    newUser.Birthday = this.bday;

    //editUser hasn't been written yet. ill write it in sprint3 - sean
    //this.userService.editUser(user);
  }
}

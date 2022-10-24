import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from '../../services/auth.service';
import {User} from '../../User';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  email !: string;
  fname !: string;
  lname !: string;
  bday !: string;
  role !: string;

  password !: string;

  tempCurrentClasses =
  ["2", "3"];

  tempHistoryClasses =
  ["4", "1"];

  constructor(
    private authService: AuthService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  signUpNewUser() {

    const newUser = {
    UID: "",
    Fname: this.fname,
    Lname: this.lname,
    ClassIDList: this.tempCurrentClasses,
    ClassHistory: this.tempHistoryClasses,
    Birthday: this.bday,
    Email: this.email,
    Role: this.role,
    AdminNotes: "thats crazy" //Mongo won't allow an empty string :(
  } as User

    //Adds user to Firebase Authentication and then to MongoDB
    this.authService.emailSignUp(this.email, this.password, newUser);
  }
}
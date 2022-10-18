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

  constructor(
    private authService: AuthService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  signUpNewUser() {

    //*This interface is here so we can see what to add.*
  //   export interface User { //This matches the schema.
  //     Email: string;
  //     Fname: string;
  //     Lname: string;
  //     Role: string;
  // }

    const newUser = {
      Email: this.email,
      Fname: this.fname,
      Lname: this.lname,
      Role: this.role
    }

    //Adds user to Firebase Authentication and then to MongoDB
    this.authService.emailSignUp(this.email, this.password, newUser);
  }
}
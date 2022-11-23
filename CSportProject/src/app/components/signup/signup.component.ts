import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from '../../services/auth.service';
import {User} from '../../User';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'], 
})
export class SignupComponent implements OnInit {

  signupForm = new FormGroup({
    email : new FormControl(''),
    password : new FormControl(''),
  })
  email !: string;
  fname !: string;
  lname !: string;
  bday !: string;
  role !: string;
  

  password !: string;
  
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  signUpNewUser() {

    const newUser = {
    UID: "",
    Fname: this.fname,
    Lname: this.lname,
    ClassIDList: [],
    ClassHistory: [],
    TransactionHistory: [],
    Birthday: this.bday,
    Email: this.email,
    Role: this.role,
    AdminNotes: ""
  } as User

    //Adds user to Firebase Authentication and then to MongoDB
    this.authService.emailSignUp(this.email, this.password, newUser);
  }


}
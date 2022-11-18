import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/User';
import { AuthService } from '../../services/auth.service';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit {

  signinForm = new FormGroup ({
    email : new FormControl(''),
    password : new FormControl(''),
  });

   tempCurrentClasses =
     ["2", "3"];

     tempHistoryClasses =
     ["4", "1"];

   constructor(
     public authService: AuthService) { }

   ngOnInit(): void {
   }

   onSubmit(formData: any) {
     if (formData.valid) {
       this.authService.login(
         formData.value.email,
         formData.value.password
       );
     }
   }

   signInAsCustomer() {
     const newUser = {
       UID: "213091239812093",
       Fname: "ironman",
       Lname: "jarvas",
       ClassIDList: this.tempCurrentClasses,
       ClassHistory: this.tempHistoryClasses,
       Birthday: "10/30/1998",
       Email: "fakecustomer@yahoo.com",
       Role: "0",
       AdminNotes: ""
     } as User

     this.authService.signInUsingFakeInformation(newUser);
   }

   signInAsAdmin() {
     const newUser = {
       UID: "4534543262436",
       Fname: "seany",
       Lname: "ynaes",
       Birthday: "10/30/1998",
       Email: "fakeadmin@gmail.com",
       Role: "1",
       AdminNotes: ""
     } as User

     this.authService.signInUsingFakeInformation(newUser);
   }
  }
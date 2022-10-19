import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/User';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(formData: any) {
    if (formData.valid) {
      console.log(formData.value);
      this.authService.login(
        formData.value.email,
        formData.value.password
      );
    }
  }

  signInAsCustomer() {
    const newUser = {
      UID: "213091239812093",
      Email: "fakecustomer@yahoo.com",
      Fname: "ironman",
      Lname: "jarvas",
      Role: "0"
    } as User

    this.authService.signInUsingFakeInformation(newUser);
  }

  signInAsAdmin() {
    const newUser = {
      UID: "4534543262436",
      Email: "fakeadmin@gmail.com",
      Fname: "seany",
      Lname: "ynaes",
      Role: "1"
    } as User

    this.authService.signInUsingFakeInformation(newUser);
  }

  triggerAlert() {
    alert("careful of the salmonella!!!1!");
  }
}
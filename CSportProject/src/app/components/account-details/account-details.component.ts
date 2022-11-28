import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { first } from 'rxjs';
import { User } from 'src/app/User';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {

  user !: User;
  email !: string;
  fname !: string;
  lname !: string;
  bday !: string;
  classCount!: string;
  pastClassCount!: string;
  createdDate!: string;
  lastLoginAt!: string;

  firebaseUserData!: any;

  constructor(
    private userService: UserService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.userService.getUser(this.authService.userData.UID).pipe(first()).subscribe(data => this.fillValues(data));
  }

  fillValues(user: User[]) {
    this.user = user[0];
    this.email = this.user.Email;
    this.fname = this.user.Fname;
    this.lname = this.user.Lname;
    this.bday = this.user.Birthday;
    this.classCount = this.user.ClassIDList.length.toString();
    this.pastClassCount = this.user.ClassHistory.length.toString();

    var epochDate = new Date(0);

    var date1 = this.authService.firebaseUserData.createdAt;
    epochDate.setUTCMilliseconds(date1);
    this.createdDate = epochDate.toLocaleDateString();

    var date2 = this.authService.firebaseUserData.lastLoginAt;
    epochDate = new Date(0);
    epochDate.setUTCMilliseconds(date2);
    this.lastLoginAt = epochDate.toLocaleDateString() + " at " + epochDate.toLocaleTimeString();
  }
}
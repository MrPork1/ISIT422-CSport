import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/User';


@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {

  views = [false, false, false, false, false];

  user!: User;
  fName1!: string;
  lName1!: string;

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {
    this.user = this.authService.returnUserObject();
    this.fName1 = this.user.Fname.substring(0, 1).toUpperCase();
    this.lName1 = this.user.Lname.substring(0, 1).toUpperCase();
  }

  setView(num: number): void {
    for (let i = 0; i < this.views.length; i++) {
      this.views[i] = false;
    }
    this.views[num] = true;
  }
}
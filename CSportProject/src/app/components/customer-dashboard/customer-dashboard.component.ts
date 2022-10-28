import { Component, OnInit } from '@angular/core';
import { Class } from 'src/app/Classes';
import { CLASSES } from 'src/app/mock-Classes';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/User';
import { ClassViewComponent } from '../class-view/class-view.component';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {

  views = [false, false,false, false];

  classes : Class[] = CLASSES;

  tempClasses: Class[] = [];

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {
    this.user = this.authService.returnUserObject();
    this.getClasses();
  }

  setView(num: number): void {
    for (let i = 0; i < this.views.length; i++) {
      this.views[i] = false;
    }

    this.views[num] = true;
  }

  user!: User;

  getClasses() {
    this.tempClasses = this.classes.filter(element => this.user.ClassIDList.includes(element.CID));
    console.log(this.tempClasses);
  }
}

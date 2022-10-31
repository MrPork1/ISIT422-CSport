import { Component, OnInit } from '@angular/core';
import { Class } from '../../Classes';
import { CLASSES } from '../../mock-Classes';
import { User } from 'src/app/User';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-history-class',
  templateUrl: './history-class.component.html',
  styleUrls: ['./history-class.component.css']
})
export class HistoryClassComponent implements OnInit {

  classes = CLASSES;

  tempClasses: Class[] = [];

  constructor(
    public authService: AuthService
  ) { }

  user!: User;

  ngOnInit(): void {
    this.user = this.authService.returnUserObject();
    this.getClasses();
  }

  getClasses() {
    this.tempClasses = this.classes.filter(element => this.user.ClassHistory.includes(element.CID));
    console.log(this.tempClasses);
  }

}

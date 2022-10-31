import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Class } from 'src/app/Classes';
import { CLASSES } from 'src/app/mock-Classes';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/User';


@Component({
  selector: 'app-enrolled-classes',
  templateUrl: './enrolled-classes.component.html',
  styleUrls: ['./enrolled-classes.component.css']
})
export class EnrolledClassesComponent implements OnInit {


  classes: Class[] = CLASSES;
  tempClasses: Class[] = [];
  user!: User;

  constructor(
    public authService: AuthService,
    public UserService: UserService
  ) { }

  ngOnInit(): void {
    this.getClasses();
  }

  getClasses() {
    this.user = this.authService.returnUserObject();
    this.tempClasses = this.classes.filter(element => this.user.ClassIDList.includes(element.CID));
  }

  dropClass(classId: string) {
    this.UserService.getUser(this.user.UID).subscribe(user => this.user = user[0]);
    this.user.ClassIDList.splice(this.user.ClassIDList.indexOf(classId), 1)
    this.UserService.editUser(this.user).subscribe();
      this.tempClasses = [];
      this.getClasses();
  }
}

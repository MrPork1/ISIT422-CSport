import { Component, OnInit } from '@angular/core';
import { Class } from '../../Classes';
import { CLASSES } from '../../mock-Classes';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-class-view',
  templateUrl: './class-view.component.html',
  styleUrls: ['./class-view.component.css']
})
export class ClassViewComponent implements OnInit {

  classes: Class[] = CLASSES;

  nonExpiredClasses: Class[] = []; //classes that are enrollable still

  tempClasses: Class[] = []; //final class list to be pushed to page

  constructor(
    public authService: AuthService,
    public UserService: UserService
  ) { }

  ngOnInit(): void {
    this.user = this.authService.returnUserObject();
    this.getClasses();
  }

  user!: User;

  getClasses() {
    console.log(this.tempClasses)
    const N = new Date(); //make a date object

    //judge classes by date
    this.classes.forEach(c => { // c is class in class list, not enrolled

      //enrolled classes should not be available
      if (!this.user.ClassIDList.includes(c.CID)) {
        var Q = c.Date.split("/") //our current date system is MM/DD/YYYY, spliting on the / will make Q[0] = MM Q[1] = DD Q[2] = YYYY
        //note:  is a quick number parser
        if (~~Q[2] > N.getFullYear()) { //if class is of greater than current year
          this.nonExpiredClasses.push(c);
        } else if (~~Q[2] == N.getFullYear()) { //if is of current year
          if ((~~Q[0] > N.getMonth() + 1)) { //if class is of greater than current month
            this.nonExpiredClasses.push(c);
          } else if (~~Q[0] == N.getMonth() + 1) { //if class is of this month
            if (~~Q[1] >= N.getDate()) { //if class is of current or greater day
              this.nonExpiredClasses.push(c);
            }
          }
        }
      }
    })

    //judge classes by seat
    this.nonExpiredClasses.forEach(e => {
      if (~~e.ClassSeats > 0) {
        this.tempClasses.push(e);
      }
    })
    console.log(this.tempClasses);
  }

  enrollClass(classId: string) {
    this.UserService.getUser(this.user.UID).subscribe(user => this.user = user[0]);
    this.user.ClassIDList.push(classId);
    this.UserService.editUser(this.user).subscribe(user => (
      this.tempClasses = [],
      this.getClasses()
    )); // might not work? could be a CORS issue
    console.log(this.user);
  }
}
import { Component, OnInit } from '@angular/core';
import { Class } from '../../Classes';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/User';
import { UserService } from 'src/app/services/user.service';
import { ClassesService } from 'src/app/services/classes.service';

@Component({
  selector: 'app-class-view',
  templateUrl: './class-view.component.html',
  styleUrls: ['./class-view.component.css']
})
export class ClassViewComponent implements OnInit {

  classes: Class[] = [];

  tempClasses: Class[] = []; //final class list to be pushed to page
  emptyTempClass!: Class;
  user!: User;

  constructor(
    public authService: AuthService,
    public UserService: UserService,
    public classesService: ClassesService
  ) { }

  ngOnInit(): void {
    this.user = this.authService.returnUserObject();
    this.getClasses();
  }

  getClasses() {
    this.classesService.getAllClasses().subscribe(classes => {
      this.classes = classes;
      console.log(this.tempClasses)
      const today = new Date(); //make a date object

      //judge classes by date
      this.classes.forEach(c => { // c is class in class list, not enrolled
        if (!this.user.ClassIDList.includes(c.CID)) {
          const thisClassDate = new Date(c.Date);
          if (thisClassDate >= today) {
            if (~~c.ClassSeats > 0) {
              this.tempClasses.push(c);
            }
          }
        }
        console.log(this.tempClasses);
      })
    })
  }

  enrollClass(classId: string) {
    console.log("before " + this.user)
    var tempClass;
    this.UserService.getUser(this.user.UID).subscribe(user => {
      this.user = user[0]
      console.log("in get user " + this.user)
      console.log(classId)
      this.user.ClassIDList.push(classId)
      console.log(this.user)
    });

    this.UserService.editUser(this.user).subscribe(x => {

      console.log("in edit " + this.user)

      tempClass = this.classes.find(x => x.CID = classId);
      console.log(tempClass);
      if (tempClass) {
        tempClass.ClassSeats = (~~tempClass.ClassSeats - 1).toString();
        this.classesService.editClass(tempClass).subscribe(x => {
          tempClass = this.emptyTempClass;
          console.log(this.tempClasses)
          this.tempClasses = [];
          this.getClasses();
          console.log(this.user.ClassIDList)
        }
        )
      };
    }
    );
  }
}
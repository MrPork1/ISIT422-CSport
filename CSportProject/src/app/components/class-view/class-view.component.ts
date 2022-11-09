import { Component, OnInit } from '@angular/core';
import { Class } from '../../Classes';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/User';
import { UserService } from 'src/app/services/user.service';
import { ClassesService } from 'src/app/services/classes.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-class-view',
  templateUrl: './class-view.component.html',
  styleUrls: ['./class-view.component.css']
})
export class ClassViewComponent implements OnInit {

  classes: Class[] = [];
  tempClasses: Class[] = [];
  user!: User;

  loading: boolean = true;
  canEnrollForClass: boolean = true;

  constructor(
    public authService: AuthService,
    public userService: UserService,
    public classesService: ClassesService
  ) { }

  ngOnInit(): void {
    this.userService.getUser(this.authService.userData.UID).pipe(first()).subscribe(data => this.getUserHere(data));
  }

  private getUserHere(user: User[]) {
    this.user = user[0];
    console.log(this.user);
    this.refreshClassList();
  }

  private getClassesThenShowThem(classes: Class[]) {
    this.classes = classes;
    const today = new Date();

    this.classes.forEach(c => {
      if (!this.user.ClassIDList.includes(c._id!)) {
        if (new Date(c.Date) >= today) {
          if (~~c.ClassSeats > 0) {
            //If it gets to here, it means the class is available for the user to enroll
            this.tempClasses.push(c);
          }
        }
      }
    });

    this.loading = false;
  }

  enrollForClassHere(classID: string) {
    //If it gets to here, its been confirmed that the class was not in the ClassIDList,
    //thats why we can push it right away without checking if it was already in there.
    if (this.canEnrollForClass) {
      this.user.ClassIDList.push(classID);
      console.log("before ", this.user);
      this.userService.editUser(this.user).pipe(first()).subscribe(data => this.editClassSeatsHere(data, classID));
      this.canEnrollForClass = false;
    }
  }

  private editClassSeatsHere(user: User, classID: string) {
    console.log("after", user);
    this.canEnrollForClass = true;

    var tempClass = this.classes.find(x => x._id === classID);
    tempClass!.ClassSeats = (~~tempClass!.ClassSeats - 1).toString();

    this.classesService.editClass(tempClass!).pipe(first()).subscribe(data => this.refreshClassList());
  }

  private refreshClassList() {
    this.loading = true;
    this.tempClasses = [];
    this.classesService.getAllClasses().pipe(first()).subscribe(data => this.getClassesThenShowThem(data));
  }
}
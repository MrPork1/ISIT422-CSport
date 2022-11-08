import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Class } from 'src/app/Classes';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/User';
import { ClassesService } from 'src/app/services/classes.service';
import { first } from 'rxjs';


@Component({
  selector: 'app-enrolled-classes',
  templateUrl: './enrolled-classes.component.html',
  styleUrls: ['./enrolled-classes.component.css']
})
export class EnrolledClassesComponent implements OnInit {


  classes: Class[] = [];
  tempClasses: Class[] = [];
  user!: User;

  loading: boolean = true;
  canDropClass: boolean = true;

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
    this.tempClasses = [];
    if (this.user.ClassIDList.length > 0) {
      this.tempClasses = this.classes.filter(element => this.user.ClassIDList.includes(element._id!));
    }
    this.loading = false;
  }

  dropClassHere(classID: string) {
    const index = this.user.ClassIDList.indexOf(classID);
    if (index !== -1) {
      this.user.ClassIDList.splice(index, 1);
      this.userService.editUser(this.user).pipe(first()).subscribe(data => this.editClassSeatsHere(data, classID));
    }
  }

  private editClassSeatsHere(user: User, classID: string) {
    var tempClass = this.classes.find(x => x._id == classID);
    tempClass!.ClassSeats = (~~tempClass!.ClassSeats + 1).toString();

    this.classesService.editClass(tempClass!).pipe(first()).subscribe(data => this.refreshClassList());
  }

  private refreshClassList() {
    this.loading = true;
    this.tempClasses = [];
    this.classesService.getAllClasses().pipe(first()).subscribe(data => this.getClassesThenShowThem(data));
  }
}
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Class } from 'src/app/Classes';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/User';
import { ClassesService } from 'src/app/services/classes.service';
import { throwIfEmpty } from 'rxjs';


@Component({
  selector: 'app-enrolled-classes',
  templateUrl: './enrolled-classes.component.html',
  styleUrls: ['./enrolled-classes.component.css']
})
export class EnrolledClassesComponent implements OnInit {


  classes: Class[] = [];
  tempClasses: Class[] = [];
  user!: User;
  emptyTempClass!: Class;

  constructor(
    public authService: AuthService,
    public UserService: UserService,
    public ClassService: ClassesService
  ) { }

  ngOnInit(): void {
    this.getClasses()
  }

  getClasses() {
    this.ClassService.getAllClasses().subscribe(classes => {
      this.user = this.authService.returnUserObject();
      console.log(this.user.ClassIDList)
      this.classes = classes
      this.tempClasses = this.classes.filter(element => this.user.ClassIDList.includes(element.CID));
      console.log(this.tempClasses)
    });
  }

  dropClass(classId: string) {
    var tempClass;
    console.log("dropping: " + classId)
    this.UserService.getUser(this.user.UID).subscribe(user => this.user = user[0]);
    this.UserService.editUser(this.user).subscribe(x =>
      this.user.ClassIDList.splice(this.user.ClassIDList.indexOf(classId), 1)
    );

    tempClass = this.classes.find(x => x.CID = classId);
    console.log(tempClass);
    if (tempClass) {
      tempClass.ClassSeats = (~~tempClass.ClassSeats + 1).toString();
      this.ClassService.editClass(tempClass).subscribe(x => {
        tempClass = this.emptyTempClass;
        this.tempClasses = [];
        console.log(this.tempClasses)
        this.getClasses();
      }
      )
    };
    
  }

}
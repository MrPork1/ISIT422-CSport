import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/User';
import { Class } from 'src/app/Classes';
import { ClassesService } from 'src/app/services/classes.service';
import { UserService } from 'src/app/services/user.service';
import { SnackBarService } from 'src/app/services/snack-bar.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {

  views = [false, false, false, false, false, false, false];

  user!: User;
  // fName1!: string;
  // lName1!: string;

  constructor(
    public authService: AuthService,
    private classService: ClassesService,
    private userService: UserService,
    private snackBar: SnackBarService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.user = this.authService.returnUserObject();
    if (sessionStorage.getItem('viewIndex')) {
      let viewNum = +sessionStorage.getItem('viewIndex')!;
      this.setView(viewNum);
    } else {
      this.setView(0);
    }

    this.router.navigate(['home'], {relativeTo: this.route});

    this.checkClassesForPastDate();
  }

  setView(num: number): void {
    for (let i = 0; i < this.views.length; i++) {
      this.views[i] = false;
    }
    
    this.views[num] = true;
    sessionStorage.setItem('viewIndex', num.toString());
  }

  checkClassesForPastDate() {
    if (this.user.ClassIDList.length <= 0) {
      return;
    }
    this.classService.getAllClasses().subscribe(x => this.checkClassList(x));
  }

  checkClassList(classes: Class[]) {
    var tempClasses = classes.filter(element => this.user.ClassIDList.includes(element._id!));

    var index = 0;

    var today = new Date();
    tempClasses.forEach(value => {
      const classDate = new Date(value.Date);
      if (today > classDate) {
        const classIndex = this.user.ClassIDList.indexOf(value._id!);
        if (classIndex !== -1) {
          this.user.ClassIDList.splice(classIndex, 1);
          this.user.ClassHistory.push(value._id!);
          this.snackBar.open("Thank you for taking " + value.Name + "!", 'Close', true, 5000);
          index++;
        }
      }
    });

    if (index > 0) {
      this.userService.clearUserData();
      this.userService.editUser(this.user).subscribe();
    }
  }
}
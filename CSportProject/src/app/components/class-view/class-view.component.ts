import { Component, OnInit } from '@angular/core';
import { Class } from '../../Classes';
import { CLASSES } from '../../mock-Classes';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/User';

@Component({
  selector: 'app-class-view',
  templateUrl: './class-view.component.html',
  styleUrls: ['./class-view.component.css']
})
export class ClassViewComponent implements OnInit {

    classes : Class[] = CLASSES;

    goodClasses: Class[] = [];
  
    tempClasses: Class[] = [];
  
    constructor(
      public authService: AuthService
    ) { }
  
    ngOnInit(): void {
      this.user = this.authService.returnUserObject();
      this.getClasses();
    }
  
    user!: User;
  
    getClasses() {
      console.log(this.classes)
      const N = new Date();
      console.log(N.getFullYear() + " " + (N.getMonth()+1) + " " + N.getDate())

      //judge classes by date
      this.classes.forEach(e => {
        var Q = e.Date.split("/")
        console.log(~~Q[2] + " " + ~~Q[0] + " " + ~~Q[1])

        if(~~Q[2] >= N.getFullYear()){
          if((~~Q[0] > N.getMonth()+1)){
            this.goodClasses.push(e);
          }else if(~~Q[0] == N.getMonth()+1){

            if(~~Q[1] >= N.getDate()) {
            this.goodClasses.push(e);
            
            }else {console.log("bad day dropped: " + e.CID)}
          } else {console.log("bad month dropped: " + e.CID)}
        } else {console.log("bad year dropped: " + e.CID)}
      });

      //judge classes by seat
      this.goodClasses.forEach(e => {
        if(~~e.ClassSeats > 0){
          this.tempClasses.push(e);
        } else{
          console.log("max seats in: " + e.Name)
        }
      })
      
      console.log(this.tempClasses);
    }

    Enroll(classid : string) {
      console.log(this.user.Fname + " " + this.user.Lname + " has enrolled to class id: " + classid)
    }
  }
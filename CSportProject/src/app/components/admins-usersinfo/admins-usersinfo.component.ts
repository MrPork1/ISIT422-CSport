import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/User';
import { USERS } from 'src/app/mock-Profiles';
import { getCurrencySymbol } from '@angular/common';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-admins-usersinfo',
  templateUrl: './admins-usersinfo.component.html',
  styleUrls: ['./admins-usersinfo.component.css']
})
export class AdminsUsersinfoComponent implements OnInit {
  ironmancomeing : boolean  = false;// i-m

  user !: User;
  //  <img src="../../../assets/SalmonellaNIAID.jpg" [style.width.px]="getPos()" [style.height.px]="getPos()" (click)="triggerAlert()">

  
  aa = document.getElementById("ironman");

  // users : User[] = USERS;
  users : User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((users) => this.users = users);
  }

 
  editUserclass(user_1 : User){ 
    this.userService.editUser(user_1).subscribe();
  }

  deleteUserAccount(user_1 : User){
    //this.userService.deleteUser2(user_1).subscribe();
    this.ironmancomeing =true;
    alert("iron-man never dies")
  }

  disappear(){
    this.ironmancomeing = false;
  }
}

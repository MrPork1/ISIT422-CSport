import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/User';
import { getCurrencySymbol } from '@angular/common';
import { UserService } from 'src/app/services/user.service';
import { first } from 'rxjs';


@Component({
  selector: 'app-admins-usersinfo',
  templateUrl: './admins-usersinfo.component.html',
  styleUrls: ['./admins-usersinfo.component.css']
})
export class AdminsUsersinfoComponent implements OnInit {
  user !: User;


  aa = document.getElementById("ironman");

  // users : User[] = USERS;
  users : User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((users) => this.users = users);
    //if get class Name at class side that would be more easy 

  }

   addUserclass(user_1 : User){ 
    this.userService.editUser(user_1).subscribe();
  }

  delteUserclass(user_1 : User){ 
    this.userService.editUser(user_1).subscribe();
  }

  editUser(user_1 : User){ 
    this.userService.editUser(user_1).subscribe();
  }


  
  deleteUserAccount(user_1 : User){

    if(user_1.Fname == "what the heck michael"){
      alert("what the heck michael!")
    } else {
      //this.userService.deleteUser2(user_1.UID).pipe(first()).subscribe(data => this.deletedUser());
      alert("Delete is not working - Kay")
      this.userService.deleteUser2(user_1._id).subscribe(() => (this.users = this.users.filter((t) => t._id !== user_1._id)));
    }
  }

  deletedUser(){
    this.users= [];
    this.userService.getAllUsers().subscribe((users) => this.users = users);
  }


}

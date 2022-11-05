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

  user !: User;
  
  // users : User[] = USERS;
  users : User[] = [];

  check_Edit !: boolean;

  classes_add !: number;
  classes_delete !: string;



  n_id !: string;
  n_firstName !: string;
  n_lastName !: string;
  fixed_array_list !: string[];
  //n_classIDList !: string[];
  n_classHistory !: string[];
  n_birthday !: string;
  n_email !: string;
  n_role !: string;
  n_adminNotes !: string;


  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((users) => this.users = users);
  }

 
  editUserclass(user_1 : User){    //user_1.ClassIDList = ["1", "0"];

    this.check_Edit = !this.check_Edit;

    this.n_id = user_1.UID;
    this.n_firstName = user_1.Fname;
    this.n_lastName = user_1.Lname;
    this.fixed_array_list = user_1.ClassIDList;
    this.n_classHistory = user_1.ClassHistory;
    this.n_birthday = user_1.Birthday;
    this.n_email = user_1.Email;
    this.n_role = user_1.Role;
    this.n_adminNotes = user_1.AdminNotes;
  }


  //from button
  add_to_list(classes_add_1 : number){
    if(this.fixed_array_list.includes(classes_add_1.toString())){
      alert("Sorry, Please Check again.");
    } else{
      this.fixed_array_list.push(classes_add_1.toString());
      this.check_Edit = true;
      //this.editUserclass(this.user);
      console.log(this.fixed_array_list);
    }

  }


  delete_From_list(classes_delete : string){
    this.fixed_array_list.forEach((value,index)=>{
      if(value==classes_delete) this.fixed_array_list.splice(index,1)});
      console.log(this.fixed_array_list)
  }

  confirm_DB(){
    const newUser = {
      UID: this.n_id,
      Fname: this.n_firstName,
      Lname: this.n_lastName,
      ClassIDList: this.fixed_array_list,
      ClassHistory: this.n_classHistory,
      Birthday: this.n_birthday,
      Email: this.n_email,
      Role: this.n_role,
      AdminNotes: this.n_adminNotes,
    } as User

    this.userService.editUser(newUser).subscribe();
    this.check_Edit = false;
  }


    //event handler for the select element's change event
    selectChangeHandler (event: any) {
      //update the ui
      this.n_role = event.target.value;
      console.log(this.n_role);
    }









    confirm(){
      const newUser = {
        UID: this.n_id,
        Fname: this.n_firstName,
        Lname: this.n_lastName,
        ClassIDList: this.fixed_array_list,
        ClassHistory: this.n_classHistory,
        Birthday: this.n_birthday,
        Email: this.n_email,
        Role: this.n_role,
        AdminNotes: this.n_adminNotes,
      } as User
  
      this.users = this.users.filter(obj => obj.UID !== this.n_id);
      this.users.push(newUser);
      this.check_Edit = false;
  
  
    }


}

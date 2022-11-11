import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { cwd } from 'process';
import { User } from 'src/app/User';

@Component({
  selector: 'app-admins-usersinfo-unit',
  templateUrl: './admins-usersinfo-unit.component.html',
  styleUrls: ['./admins-usersinfo-unit.component.css']
})
export class AdminsUsersinfoUnitComponent implements OnInit {




  check_Edit : boolean = false;

  classes_add !: number;
  classes_delete !: string;
  secret_node !: string;


  n_id !: string;
  n_firstName !: string;
  n_lastName !: string;
  n_classHistory !: string[];
  n_birthday !: string;
  n_email !: string;
  n_role !: string;
  n_adminNotes !: string;



  @Input()
  user !: User;
  check_infor : boolean = false;

  @Output()
  onEditUser : EventEmitter<User> = new EventEmitter();

  @Output()
  onAddUserClass : EventEmitter<User> = new EventEmitter();

  @Output()
  onDeleteUserClass : EventEmitter<User> = new EventEmitter();



  @Output()
  onDeleteUser : EventEmitter<User> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  getEditUserclass(){    //get informaion and save it if adimin click specific user. 
    this.check_Edit = !this.check_Edit;
  }

// try show list to display so admin can see what will add but if admin does not click submit it will not change
  add_to_list(classes_add_1 : number, user : User){
    if(user.ClassIDList.includes(classes_add_1.toString())){
      alert("Sorry, Please Check again.");
    } else{
      user.ClassIDList.push(classes_add_1.toString());
      this.onAddUserClass.emit(user);
    }
    this.classes_add = 0;
  }

  delete_From_list(classes_delete : string, user:User){
    
    user.ClassIDList.forEach((value,index)=>{
      if(value==classes_delete) user.ClassIDList.splice(index,1)});
    
    console.log("Test User" + user.ClassIDList);
    this.onDeleteUserClass.emit(user);
    this.classes_delete = "";

  }

  selectChangeHandler (event: any, user : User) {
    this.n_role = event.target.value;
    user.Role = this.n_role;
  }


  confirm_edit(user_1 : User){

    this.check_Edit = false;
    this.onEditUser.emit(user_1);
  }

  onDelete_user(user_1 : User){
    
    this.onDeleteUser.emit(user_1);
  }

}

import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
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


  n_id !: string;
  n_firstName !: string;
  n_lastName !: string;
  fixed_array_list !: string[];
  n_classHistory !: string[];
  n_birthday !: string;
  n_email !: string;
  n_role !: string;
  n_adminNotes !: string;



  @Input()
  user !: User;
  check_infor : boolean = false;

  @Output()
  onEdit : EventEmitter<User> = new EventEmitter();

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
    console.log(classes_add_1);
    this.fixed_array_list = user.ClassIDList;

    if(this.fixed_array_list.includes(classes_add_1.toString())){
      alert("Sorry, Please Check again.");
    } else{
      this.fixed_array_list.push(classes_add_1.toString());
      console.log(this.fixed_array_list);
    }
    console.log("List : "+ this.fixed_array_list);
    user.ClassIDList = this.fixed_array_list;



    //user.ClassIDList = ["1","2"];  //a bug about display 
    this.classes_add = 0;
    console.log(user.ClassIDList + "Test");
  }


  delete_From_list(classes_delete : string, user:User){
    this.fixed_array_list = user.ClassIDList;
    this.fixed_array_list.forEach((value,index)=>{
      if(value==classes_delete) this.fixed_array_list.splice(index,1)});
    user.ClassIDList = this.fixed_array_list;
    this.classes_delete = "";
  }

  selectChangeHandler (event: any, user : User) {
    this.n_role = event.target.value;
    user.Role = this.n_role;
  }


  confirm_edit(user_1 : User){
    this.onEdit.emit(user_1);
  }

  onDelete_user(user_1 : User){
    this.onDeleteUser.emit(user_1);
  }



}

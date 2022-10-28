import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { User } from 'src/app/User';
import { USERS } from 'src/app/mock-Profiles';

@Component({
  selector: 'app-admins-usersinfo-unit',
  templateUrl: './admins-usersinfo-unit.component.html',
  styleUrls: ['./admins-usersinfo-unit.component.css']
})
export class AdminsUsersinfoUnitComponent implements OnInit {



  @Input()
  user !: User;

  check_infor : boolean = false;
  // check_EditClass: boolean = false;
  // check_EditRole : boolean = false;

  //add or delete class 
  // fixedClassList : [] = [];
  // classes_add !: number;
  // classes_delete !: string;



  @Output()
  onEditClassList : EventEmitter<User> = new EventEmitter();

  @Output()
  onEditUserRole : EventEmitter<User> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  showUserinfor(){
    this.check_infor = !this.check_infor;
  }

  onEditClass(user_1 : User){
    // this.check_EditClass = !this.check_EditClass;
    this.onEditClassList.emit(user_1)
  }

  onEditRole(user_1 : User){
    // this.check_EditRole = !this.check_EditRole;
    this.onEditUserRole.emit(user_1)
  }

  // add_to_list(user_1 : User, classes_add_1 : Number){
  //   if(user_1.ClassIDList.includes(classes_add_1.toString())){
  //     alert("Sorry, Check again.")
  //   }else {
  //     user_1.ClassIDList.push(classes_add_1.toString());
  //   }
  // }


  // delete_From_list( user_1 : User ,classes_delete : string){

  // }
}

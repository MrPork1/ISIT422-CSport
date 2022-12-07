import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { cwd } from 'process';
import { User } from 'src/app/User';
import { Class } from 'src/app/Classes';
import { ClassesService } from 'src/app/services/classes.service';
import { first } from 'rxjs';
import { faL } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admins-usersinfo-unit',
  templateUrl: './admins-usersinfo-unit.component.html',
  styleUrls: ['./admins-usersinfo-unit.component.css']
})


export class AdminsUsersinfoUnitComponent implements OnInit {
  class !: Class;
  classes : Class[] =[]
  
  users : [] = [];
  check_infor : boolean = false;
  check_classList : boolean = false;
  check_Edit : boolean = false;
  check_AddClass : boolean = false;

  // For updating user infor
  fuser_name !: string;
  luser_name !: string;
  n_admin_note !: string;
  birthday !: string;
  user_status !: string;
  color : string = "red";
  count : number = 0;
  dic_enrolled_Class = new Set();


  //Data binding From admin-usersinfo to here.
  @Input()
  user !: User;
  //Data binding From here to admin-usersinfo.
  @Output()
  onEditUser : EventEmitter<User> = new EventEmitter();
  //Data binding From here to admin-usersinfo.
  @Output()
  onAddUserClass : EventEmitter<User> = new EventEmitter();
  //Data binding From here to admin-usersinfo.
  @Output()
  onDeleteUserClass : EventEmitter<User> = new EventEmitter();
  //Data binding From here to admin-usersinfo.
  @Output()
  onDeleteUser : EventEmitter<User> = new EventEmitter();
  //Data binding From here to admin-usersinfo.
  @Output()
  test_check_include_classID2 : EventEmitter<Class> = new EventEmitter();

  // Connect Class Service to and save data to Classes variable  
  constructor(private classService : ClassesService) { }
  ngOnInit(): void {
    this.classService.getAllClasses().subscribe((classes) => this.classes = classes);
    if(this.user.Role == "0"){this.user_status = "Admin"};
    this.fuser_name = this.user.Fname;
    this.luser_name = this.user.Lname;
    this.n_admin_note = this.user.AdminNotes;
    this.birthday = this.user.Birthday;
  }

  // Update User Account
  onUpdate(user_1 : User){
    user_1.Fname = this.fuser_name;
    user_1.Lname = this.luser_name;
    user_1.Birthday = this.birthday;
    user_1.AdminNotes = this.n_admin_note;
    this.onEditUser.emit(user_1);
    this.check_Edit = false;
  }

  // Save Role val to user
  selectChangeHandler (event: any, user : User) {
    user.Role = event.target.value;
  }

  // The function will show Edit screen.
  onEdit_user(){
    if(this.user.Role == "1"){this.user_status = "Admin"};
    if(this.check_AddClass){this.check_AddClass = !this.check_AddClass}
    this.check_Edit = !this.check_Edit;
  }

  // Class Add
  third_step_Add_class(class_1 : Class, user_1 : User){
    user_1.ClassIDList.push(class_1._id!);
    this.onAddUserClass.emit(user_1);
  }

  // Admin edits user account
  third_confirm_edit(user_1 : User){
    this.check_Edit = !this.check_Edit;
    this.onEditUser.emit(user_1);
  }
  // Display Add Class List
  onShowClass(){
    if(this.check_Edit){this.check_Edit = !this.check_Edit}
    this.check_AddClass = !this.check_AddClass;
  }
  // Delete User
  onDelete_user(user_1 : User){
    this.onDeleteUser.emit(user_1);
  }

  // Delete User added Class. 
  delteClassID_Middle(class1 : Class, user_1: User){
    this.check_AddClass = false;
    user_1.ClassIDList.forEach((value,index)=>{
      if(value==class1._id) user_1.ClassIDList.splice(index,1)});
    this.onDeleteUserClass.emit(user_1);
  }


}

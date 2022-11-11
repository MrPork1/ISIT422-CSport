import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { cwd } from 'process';
import { User } from 'src/app/User';
import { Class } from 'src/app/Classes';
import { ClassesService } from 'src/app/services/classes.service';
import { first } from 'rxjs';
@Component({
  selector: 'app-admins-usersinfo-unit',
  templateUrl: './admins-usersinfo-unit.component.html',
  styleUrls: ['./admins-usersinfo-unit.component.css']
})
export class AdminsUsersinfoUnitComponent implements OnInit {

  //classes : Class[] = [];


  check_Edit : boolean = false;

  classes_add !: string;
  classes_delete !: string;
  secret_node !: string;


  n_id !: string;
  n_firstName !: string;
  n_lastName !: string;
  n_classHistory !: string[];
  n_birthday !: string;
  n_email !: string;
  n_admin_note !: string;



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

  // tempClasses: Class[] = [];

//  constructor(private classService : ClassesService) { }

  constructor() { }

  ngOnInit(): void {
    //this.classService.getAllClasses().pipe(first()).subscribe(data => this.getClasses_name(data));

    //this.classService.getAllClasses().subscribe((classes) => this.classes = classes)
    

  }

  // getClasses_name(classes: Class[]) {
  //   this.tempClasses = classes.filter(element => this.user.ClassIDList.includes(element._id!));
  // }

  getEditUserclass(){    //get informaion and save it if adimin click specific user. 
    this.check_Edit = !this.check_Edit;
  }

// try show list to display so admin can see what will add but if admin does not click submit it will not change
  add_to_list(classes_add_1 : string, user : User){

    if(user.ClassIDList.includes(classes_add_1.toString())){
      alert("Sorry, Please Check again.");
    } else{
      user.ClassIDList.push(classes_add_1);
      this.onAddUserClass.emit(user);
    }
    this.classes_add = "";
  }


  dropClassHere(classID: string) {
    const index = this.user.ClassIDList.indexOf(classID);
    if (index !== -1) {
      this.user.ClassIDList.splice(index, 1);
    }
  }



  delete_From_list(classID : string, user:User){

    const index = this.user.ClassIDList.indexOf(classID);
    if (index !== -1) {
      this.user.ClassIDList.splice(index, 1);
    }

    // user.ClassIDList.forEach((value,index)=>{
    //   if(value==classes_id) user.ClassIDList.splice(index,1)});
    
    // console.log("Test User" + user.ClassIDList);
    this.onDeleteUserClass.emit(user);
    this.classes_delete = "";

  }

  selectChangeHandler (event: any, user : User) {
    user.Role = event.target.value;;
    console.log(user.Role);
  }


  submit(user_1 : User){
    user_1.AdminNotes = this.n_admin_note
    console.log(user_1);
    this.onEditUser.emit(user_1);
    this.check_Edit = false;
  }

  onDelete_user(user_1 : User){
    this.onDeleteUser.emit(user_1);
  }

}

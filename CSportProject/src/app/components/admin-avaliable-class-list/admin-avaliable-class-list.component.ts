import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { faL } from '@fortawesome/free-solid-svg-icons';
import { rejects } from 'assert';
import { cwd } from 'process';
import { Class } from 'src/app/Classes';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/User';
@Component({
  selector: 'app-admin-avaliable-class-list',
  templateUrl: './admin-avaliable-class-list.component.html',
  styleUrls: ['./admin-avaliable-class-list.component.css']
})
export class AdminAvaliableClassListComponent implements OnInit {

  // Data binding from admins-usersinfo-unit to here. 
  @Input()
  class !: Class;

  // Data binding from admins-usersinfo-unit to here. 
  @Input()
  user !: User;

  // Data binding from there to admins-usersinfo-unit. 
  @Output()
  second_step_Add_class : EventEmitter<Class> = new EventEmitter();
  // Data binding from here to admins-usersinfo-unit. 
  @Output()
  second_check_include_classID2 : EventEmitter<Class> = new EventEmitter();

  check : boolean =false;


  constructor() { 
  }


  ngOnInit(): void {
    // Call the check_include_classID(function) when the page loading.  
    this.check_include_classID(this.user, this.class);
  }

  // Add Class.
  first_step_Add_class(user_1 : User, class_1 : Class){
    if(user_1.ClassIDList.includes(class_1._id!)){
        alert("Already added");
    }else{
      this.check = !this.check; 
      this.second_step_Add_class.emit(class_1);
    }
  }


  //Filter Classes which user doesn't enrolled.
  check_include_classID(user_1 : User, class_1 : Class){
    if(user_1.ClassIDList.includes(class_1._id!)){
      this.check = false;
      console.log(class_1._id!);
    }else{
      this.check = true;
    }
  }

}

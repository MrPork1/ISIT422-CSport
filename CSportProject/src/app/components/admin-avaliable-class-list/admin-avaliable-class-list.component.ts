import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
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
  @Input()
  class !: Class;
  classes : Class[] = [];
  @Input()
  user !: User;


  @Output()
  second_step_Add_class : EventEmitter<Class> = new EventEmitter();


  constructor(private userService : UserService) { 

  }

  ngOnInit(): void {
  }

  first_step_Add_class(class1 : Class){
    this.second_step_Add_class.emit(class1);
  }
}

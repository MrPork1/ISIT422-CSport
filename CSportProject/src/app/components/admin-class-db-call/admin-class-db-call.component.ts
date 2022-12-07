import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';
import { Class } from 'src/app/Classes';
import { faTimes } from '@fortawesome/free-solid-svg-icons';      // 1. From angular-fontawesome    
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin-class-db-call',
  templateUrl: './admin-class-db-call.component.html',
  styleUrls: ['./admin-class-db-call.component.css']
})
export class AdminClassDbCallComponent implements OnInit {
  
  //From angular-fontawesome(Icon Library)
  faTrashCan = faTrashCan; 
  //Data binding From admins-usersinfo-unit to here.
  @Input()
  class !: Class;
  
  //Data binding From admins-usersinfo-unit to here.
  @Input()
  user_Class_Id !: string;
  
  // 1. Data binding From here to admins-usersinfo-unit. 
  @Output()
  sendClassInfo : EventEmitter<Class> =new EventEmitter();


  constructor() { }
  ngOnInit(): void {
  }

  // 2. Emit Class which you want to delete to admins-usersinfo-unit for Data binding.
  onSendClassInfo(class1 : Class){
    this.sendClassInfo.emit(class1);
  }


}

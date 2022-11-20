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
  // @Output()
  // class !: Class;

  faTrashCan = faTrashCan; // 2. From angular-fontawesome

  @Input()
  class !: Class;
  @Input()
  user_Class_Id !: string;
  testnum : number = 0
  @Output()
  sendClassInfo : EventEmitter<Class> =new EventEmitter();

  classes : Class[] = [];

  constructor() { }



  ngOnInit(): void {
  }

  
  onSendClassInfo(class1 : Class){
    this.sendClassInfo.emit(class1);
  }


}

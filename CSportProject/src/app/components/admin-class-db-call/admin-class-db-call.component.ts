import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';
import { Class } from 'src/app/Classes';
import { faTimes } from '@fortawesome/free-solid-svg-icons';      // 1. From angular-fontawesome    


@Component({
  selector: 'app-admin-class-db-call',
  templateUrl: './admin-class-db-call.component.html',
  styleUrls: ['./admin-class-db-call.component.css']
})
export class AdminClassDbCallComponent implements OnInit {
  // @Output()
  // class !: Class;

  faTimes = faTimes; // 2. From angular-fontawesome

  @Input()
  class !: Class;
  @Input()
  user_Class_Id !: string;

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

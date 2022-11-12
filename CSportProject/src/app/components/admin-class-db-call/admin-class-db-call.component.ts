import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';
import { Class } from 'src/app/Classes';



@Component({
  selector: 'app-admin-class-db-call',
  templateUrl: './admin-class-db-call.component.html',
  styleUrls: ['./admin-class-db-call.component.css']
})
export class AdminClassDbCallComponent implements OnInit {
  // @Output()
  // class !: Class;


  @Input()
  class !: Class;
  @Input()
  user_Class_Id !: string;

  @Output()
  sendClassInfo : EventEmitter<Class> =new EventEmitter();

  classes : Class[] = [];

  constructor() { }



  ngOnInit(): void {
    // this.classService.getAllClasses().pipe(first()).subscribe(data => this.getClasses_name(data));
  }

  
  onSendClassInfo(class1 : Class){
    this.sendClassInfo.emit(class1);
  }
  

}

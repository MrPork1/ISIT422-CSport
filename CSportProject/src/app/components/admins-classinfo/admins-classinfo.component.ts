import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { Class } from 'src/app/Classes';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-admins-classinfo',
  templateUrl: './admins-classinfo.component.html',
  styleUrls: ['./admins-classinfo.component.css']
})
export class AdminsClassinfoComponent implements OnInit {

  @Input()
  class !: Class;


  @Output() 
  onDeleteClass : EventEmitter<Class> = new EventEmitter();
  @Output()
  onUpateClass : EventEmitter<Class> = new EventEmitter();


  faTimes = faTimes; // 2. From angular-fontawesome


  constructor() { }

  ngOnInit(): void {
  }

  onDelete(class2 : Class){
    this.onDeleteClass.emit(class2);
  }

  onUpdate(class2 : Class){
    this.onUpateClass.emit(class2);
  }

}

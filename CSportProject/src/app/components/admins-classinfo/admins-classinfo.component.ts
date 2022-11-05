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
  @Output()
  onAddClass : EventEmitter<Class> = new EventEmitter();

  check_edit : boolean = false;
  id_fix !: string;
  name_fix !: string;
  desc_fix !: string;
  start_fix !: string;
  end_fix !: string;
  // check_add !: boolean;



  faTimes = faTimes; // 2. From angular-fontawesome


  constructor() { }

  ngOnInit(): void {
  }

  // onAdd(class2 : Class){
  //   this.onAddClass.emit(class2);
  // }

  onDelete(class2 : Class){
    this.onDeleteClass.emit(class2);
  }

  onUpdate(class2 : Class){
    class2.Name = this.name_fix;
    class2.Descript = this.desc_fix;
    class2.STime = this.start_fix;
    class2.ETime = this.end_fix;
    this.onUpateClass.emit(class2);
  }


  onDisplay_Update_function(class2 : Class){
    this.name_fix = class2.Name;
    this.desc_fix = class2.Descript;
    this.start_fix = class2.STime;
    this.end_fix = class2.ETime;

    this.check_edit = !this.check_edit;
    console.log("Hi")
  }
  
  //local side code
  // onCreatClass(){
  //   if(!this.name || !this.desc || !this.start || !this.end){  //need to check again
  //     alert("Please check again.");
  //   }

  //   else{

  //     this.class

  //     const addClass = {
  //       CID : this.id,
  //       Name : this.name,
  //       Descript : this.desc,
  //       STime : this.start,
  //       ETime : this.end,
  //       Date: this.Tdate,
  //       ClassSeats: this.sets
  //     }
  
  //     this.id = "";
  //     this.name = "";
  //     this.desc = "";
  //     this.start = "";
  //     this.end = "";
  //     this.sets = "";
  //     this.check_add = !this.check_add;
  //   }
  // }

//   onUpdateClass(){

//     const fixedClass = {
//       CID : this.id_fix,
//       Name : this.name_fix,
//       Descript : this.desc_fix,
//       STime : this.start_fix,
//       ETime : this.end_fix,
//       Date: "test",
//       ClassSeats: "not yet"
//     }

//     this.classes = this.classes.filter(obj => obj.CID !== this.id_fix); //delete
//     this.classes.push(fixedClass);
//     this.check = !this.check;
// }


}

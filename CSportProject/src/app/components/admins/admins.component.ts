import { Component, OnInit} from '@angular/core';
import { Class } from 'src/app/Classes';
import { CLASSES } from 'src/app/mock-Classes';


@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent implements OnInit {

  classes : Class[] = CLASSES;


  id !: number;
  name !: string;
  desc !: string;
  start !: string;
  end !: string;


  check : boolean = false;
  id_fix !: number;
  name_fix !: string;
  desc_fix !: string;
  start_fix !: string;
  end_fix !: string;



  constructor() { }

  ngOnInit(): void {
  }

  onCreatClass(){
    if(!this.id || !this.name || !this.desc || !this.start || !this.end){
      alert("Please check again.");
    }

    else{

      const addClass = {
        id : this.id,
        className : this.name,
        classDesc : this.desc,
        classStart : this.start,
        classEnd : this.end,
      }
  
      this.classes.push(addClass);
  
      this.id = 0;
      this.name = "";
      this.desc = "";
      this.start = "";
      this.end = "";

    }
  }

  deleteClass(class2 : Class){
    this.classes = this.classes.filter(obj => obj.id !== class2.id);
  }

  updateClass(class2: Class){
    this.check = !this.check;
    this.id_fix = class2.id;
    this.name_fix = class2.className;
    this.desc_fix = class2.classDesc;
  }

  onUpdateClass(){
    console.log("H@");
    
    console.log();
    //Try Splice?
    //Or Index?


    
    this.classes.find(x => x.id === this.id_fix)?.className
    // this.classes[this.id_fix].className = this.name_fix;
    // this.classes[this.id_fix].classDesc = this.desc_fix;
    // this.classes[this.id_fix].classStart = this.start_fix;
    // this.classes[this.id_fix].classEnd = this.end_fix;

    this.check = !this.check;
  }




}

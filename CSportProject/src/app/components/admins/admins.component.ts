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


  id !: string;
  name !: string;
  desc !: string;
  start !: string;
  end !: string;
  sets !: string;
  Tdate !: string;

  check : boolean = false;
  id_fix !: string;
  name_fix !: string;
  desc_fix !: string;
  start_fix !: string;
  end_fix !: string;


  check_add !: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  onCreatClass(){
    if(!this.name || !this.desc || !this.start || !this.end){
      alert("Please check again.");
    }

    else{

      const addClass = {
        CID : this.id,
        Name : this.name,
        Descript : this.desc,
        STime : this.start,
        ETime : this.end,
        Date: this.Tdate,
        ClassSeats: this.sets
      }
  
      this.classes.push(addClass);
  
      this.id = "";
      this.name = "";
      this.desc = "";
      this.start = "";
      this.end = "";
      this.sets = "";
      this.check_add = !this.check_add;
    }
  }

  deleteClass(class2 : Class){
    this.classes = this.classes.filter(obj => obj.CID !== class2.CID);
  }

  updateClass(class2: Class){
    this.check = !this.check;
    this.id_fix = class2.CID;
    this.name_fix = class2.Name;
    this.desc_fix = class2.Descript;
  }

  onUpdateClass(){
        //Try Splice?
    //Or Index?

    
    const fixedClass = {
      CID : this.id_fix,
      Name : this.name_fix,
      Descript : this.desc_fix,
      STime : this.start_fix,
      ETime : this.end_fix,
      Date: "test",
      ClassSeats: "not yet"
    }

    this.classes = this.classes.filter(obj => obj.CID !== this.id_fix); //delete
    this.classes.push(fixedClass);
    this.check = !this.check;
  }


  checkAddClass(){
    this.check_add = !this.check_add;
    console.log(this.check_add);
  }



}

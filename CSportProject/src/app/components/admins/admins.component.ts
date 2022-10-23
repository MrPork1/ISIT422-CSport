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


  check : boolean = false;
  id_fix !: string;
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
        CID : this.id,
        Name : this.name,
        Descript : this.desc,
        STime : this.start,
        ETime : this.end,
        Date: "test",
        ClassSeats: "not yet"
      }
  
      this.classes.push(addClass);
  
      this.id = "";
      this.name = "";
      this.desc = "";
      this.start = "";
      this.end = "";

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
    console.log("H@");
    
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

    
    //this.classes.find(x => x.CID === this.id_fix)
    // this.classes[this.id_fix].className = this.name_fix;
    // this.classes[this.id_fix].classDesc = this.desc_fix;
    // this.classes[this.id_fix].classStart = this.start_fix;
    // this.classes[this.id_fix].classEnd = this.end_fix;

    this.check = !this.check;
  }




}

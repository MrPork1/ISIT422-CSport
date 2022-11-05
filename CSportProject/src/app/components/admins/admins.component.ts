import { Component, OnInit} from '@angular/core';
import { Class } from 'src/app/Classes';
import { CLASSES } from 'src/app/mock-Classes';
import { ClassesService } from 'src/app/services/classes.service';
@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent implements OnInit {

  classes : Class[] = [];


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

  constructor(private classService: ClassesService) { }

  ngOnInit(): void {
    this.classService.getAllClasses().subscribe((classes) => this.classes = classes)
  }


  onCreatClass_DB(){
    if(!this.name || !this.desc || !this.start || !this.end){
      alert("Please check again.");
    }

    const new_class = {
      CID : this.id,
      Name : this.name,
      Descript : this.desc,
      STime : this.start,
      ETime : this.end,
      Date: this.Tdate,
      ClassSeats: this.sets
    }

    this.classService.addClass(new_class).subscribe((new_class) => (this.classes.push(new_class)));

    this.id = "";
    this.name = "";
    this.desc = "";
    this.start = "";
    this.end = "";
    this.sets = "";
    this.check_add = !this.check_add;

  }


  
  deleteClass_DB(class2 : Class){
    console.log(class2.CID);
    console.log(class2._id);
    this.classService.deleteClass(class2.CID).subscribe(() => (this.classes = this.classes.filter((t) => t.CID !== t.CID)));
  }


  onUpdateClass_DB(){
    
    const fixedClass = {
      CID : this.id_fix,
      Name : this.name_fix,
      Descript : this.desc_fix,
      STime : this.start_fix,
      ETime : this.end_fix,
      Date: "test",
      ClassSeats: "not yet"
    }
    this.classService.editClass(fixedClass).subscribe();
  }

  updateClass(class2: Class){
    this.check = !this.check;
    this.id_fix = class2.CID;
    this.name_fix = class2.Name;
    this.desc_fix = class2.Descript;
  }

  checkAddClass(){
    this.check_add = !this.check_add;
    console.log(this.check_add);
  }



// ---------------------------------------------------------------------------------------------------------------------------------






  //local side code
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



}

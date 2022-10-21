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

}

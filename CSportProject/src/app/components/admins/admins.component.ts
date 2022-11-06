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

  check_add !: boolean; // check move or not 
  check_showClass !: boolean;
  constructor(private classService: ClassesService) { }

  ngOnInit(): void {
    this.classService.getAllClasses().subscribe((classes) => this.classes = classes)
  }

  addClass_DB(class2 : Class){
    this.classService.addClass(class2).subscribe((class2)=>(this.classes.push(class2)));
  }

  deleteClass_DB(class2 : Class){
    this.classService.deleteClass(class2._id).subscribe(() => (this.classes = this.classes.filter((t) => t._id !== class2._id)));
  }

  onUpdateClass_DB(class2: Class){
    this.classService.editClass(class2).subscribe();
  }


}

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

  constructor(private classService: ClassesService) { }

  ngOnInit(): void {
    this.classService.getAllClasses().subscribe((classes) => this.classes = classes)
  }



  deleteClass_DB(class2 : Class){
    this.classService.deleteClass(class2._id).subscribe(() => (this.classes = this.classes.filter((t) => t._id !== t._id)));
  }


  onUpdateClass_DB(class2: Class){
    this.classService.editClass(class2).subscribe();
  }


  checkAddClass(){ // check move or not 
    this.check_add = !this.check_add;
    console.log(this.check_add);
  }
}

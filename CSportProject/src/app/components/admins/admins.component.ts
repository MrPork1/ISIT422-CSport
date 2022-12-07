import { Component, OnInit} from '@angular/core';
import { faLessThanEqual } from '@fortawesome/free-solid-svg-icons';
import { Class } from 'src/app/Classes';
import { ClassesService } from 'src/app/services/classes.service';
@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent implements OnInit {

  classes : Class[] = [];

  constructor(private classService: ClassesService) { }

  // Get ClassData which is from service and save them to classes(property)  
  ngOnInit(): void {
    this.classService.getAllClasses().subscribe((classes) => this.classes = classes)
  }

  // Add Class
  addClass_DB(class2 : Class){
    this.classService.addClass(class2).subscribe((class2)=>(this.classes.push(class2)));
    this.classService.clearClassData();
  }

  // Delete Class
  deleteClass_DB(class2 : Class){
    this.classService.deleteClass(class2._id).subscribe(() => (this.classes = this.classes.filter((t) => t._id !== class2._id)));
    this.classService.clearClassData();
  }

  //Update Class
  onUpdateClass_DB(class2: Class){
    this.classService.editClass(class2).subscribe();
    this.classService.clearClassData();
  }
}

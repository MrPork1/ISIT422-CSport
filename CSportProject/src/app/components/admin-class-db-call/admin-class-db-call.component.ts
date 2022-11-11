import { Component, OnInit, Input, Output } from '@angular/core';
import { Class } from 'src/app/Classes';
import { ClassesService } from 'src/app/services/classes.service';
import { first } from 'rxjs';


@Component({
  selector: 'app-admin-class-db-call',
  templateUrl: './admin-class-db-call.component.html',
  styleUrls: ['./admin-class-db-call.component.css']
})
export class AdminClassDbCallComponent implements OnInit {
  @Output()
  class !: Class;
  @Input()
  user_Class_Id !: string;
  

  classes : Class[] = [];

  constructor(private classService : ClassesService) { }



  ngOnInit(): void {
    // this.classService.getAllClasses().pipe(first()).subscribe(data => this.getClasses_name(data));

    this.classService.getAllClasses().subscribe((classes) => this.classes = classes)
  }

  

}

import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Class } from 'src/app/Classes';
import { ClassesService } from 'src/app/services/classes.service';

@Component({
  selector: 'app-admin-avaliable-class-list',
  templateUrl: './admin-avaliable-class-list.component.html',
  styleUrls: ['./admin-avaliable-class-list.component.css']
})
export class AdminAvaliableClassListComponent implements OnInit {
  @Input()
  class !: Class;
  classes : Class[] = [];
  


  constructor() { }

  ngOnInit(): void {
  }
}

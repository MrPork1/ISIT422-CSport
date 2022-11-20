import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Class } from 'src/app/Classes';

@Component({
  selector: 'app-class-view-card',
  templateUrl: './class-view-card.component.html',
  styleUrls: ['./class-view-card.component.css']
})
export class ClassViewCardComponent implements OnInit {

  @Input()
  class!: Class;

  @Output()
  returnClassDetails = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {

  }

  getClassId(classId: string) {
    this.returnClassDetails.emit(classId);
  }
}
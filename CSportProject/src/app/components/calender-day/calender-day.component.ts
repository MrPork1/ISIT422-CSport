import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Day } from 'src/app/Day';

@Component({
  selector: 'app-calender-day',
  templateUrl: './calender-day.component.html',
  styleUrls: ['./calender-day.component.css']
})
export class CalenderDayComponent implements OnInit {

  @Input()
  day!: Day;

  @Output()
  getDayDetails = new EventEmitter<Day>();

  constructor() { }

  ngOnInit(): void {
  }

  returnDay(day: Day) {
    this.getDayDetails.emit(day);
  }
}
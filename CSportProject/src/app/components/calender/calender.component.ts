import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent implements OnInit {

  days:number[] = [];

  constructor() { }

  ngOnInit(): void {
    this.populateCalender();
  }

  populateCalender() {
    for(var i = 1; i < 31; i++) {
      this.days.push(i);
    }
  }
}

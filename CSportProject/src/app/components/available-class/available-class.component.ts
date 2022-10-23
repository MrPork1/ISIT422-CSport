import { Component, OnInit } from '@angular/core';
import { Class } from 'src/app/Classes';
import { CLASSES } from 'src/app/mock-Classes';


@Component({
  selector: 'app-available-class',
  templateUrl: './available-class.component.html',
  styleUrls: ['./available-class.component.css']
})
export class AvailableClassComponent implements OnInit {

  classes = CLASSES;

  constructor() { }

  ngOnInit(): void {
  }

}

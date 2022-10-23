import { Component, OnInit } from '@angular/core';
import { Class } from '../../Classes';
import { CLASSES } from '../../mock-Classes';


@Component({
  selector: 'app-history-class',
  templateUrl: './history-class.component.html',
  styleUrls: ['./history-class.component.css']
})
export class HistoryClassComponent implements OnInit {

  classes = CLASSES;
  
  constructor() { }

  ngOnInit(): void {
  }

}

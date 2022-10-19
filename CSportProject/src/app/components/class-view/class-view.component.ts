import { Component, OnInit } from '@angular/core';
import { Class } from '../../Classes';
import { CLASSES } from '../../mock-Classes';

@Component({
  selector: 'app-class-view',
  templateUrl: './class-view.component.html',
  styleUrls: ['./class-view.component.css']
})
export class ClassViewComponent implements OnInit {

  classes = CLASSES;

  constructor() { }

  ngOnInit(): void {
  }

}
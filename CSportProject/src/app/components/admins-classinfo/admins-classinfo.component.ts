import { Component, OnInit , Input} from '@angular/core';
import { Class } from 'src/app/Classes';
@Component({
  selector: 'app-admins-classinfo',
  templateUrl: './admins-classinfo.component.html',
  styleUrls: ['./admins-classinfo.component.css']
})
export class AdminsClassinfoComponent implements OnInit {

  @Input()
  class !: Class;


  constructor() { }

  ngOnInit(): void {
  }

}

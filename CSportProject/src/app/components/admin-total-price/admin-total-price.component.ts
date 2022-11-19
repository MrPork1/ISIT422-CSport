import { outputAst } from '@angular/compiler';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Class } from 'src/app/Classes';
import { ClassesService } from 'src/app/services/classes.service';
@Component({
  selector: 'app-admin-total-price',
  templateUrl: './admin-total-price.component.html',
  styleUrls: ['./admin-total-price.component.css']
})

export class AdminTotalPriceComponent implements OnInit {
  @Input()
  class !: Class;
  @Input()
  user_Class_Id !: string;

  total : number = 10;

  classes : Class[] = [];

  constructor() { 
  }

  ngOnInit(): void {

        if(this.user_Class_Id == this.class._id){
          this.total = this.class.Price; // total will also reload evey time.
          console.log(this.total);
        }
    

    // if(this.user_Class_Id == this.class._id)
  }


  


}

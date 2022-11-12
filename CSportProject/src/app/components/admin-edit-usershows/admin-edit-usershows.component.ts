import { outputAst } from '@angular/compiler';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/User';
@Component({
  selector: 'app-admin-edit-usershows',
  templateUrl: './admin-edit-usershows.component.html',
  styleUrls: ['./admin-edit-usershows.component.css']
})
export class AdminEditUsershowsComponent implements OnInit {
  @Input()
  user !: User;
  @Output()
  second_confirm_edit : EventEmitter<User> = new EventEmitter();

  check_Edit : boolean = false;
  fuser_name !: string;
  luser_name !: string;
  n_admin_note !: string;
  birthday !: string;


  constructor() { 
    
  }

  ngOnInit(): void {
  }

  fisrt_confirm_edit(user_1 : User){
    user_1.Fname = this.fuser_name;
    user_1.Lname = this.luser_name;
    user_1.Birthday = this.birthday;
    user_1.AdminNotes = this.n_admin_note;
    this.second_confirm_edit.emit(user_1)
    this.check_Edit = !this.check_Edit;
  }

  selectChangeHandler (event: any, user : User) {
    user.Role = event.target.value;;
  }


  onEdit_user(){
    this.check_Edit = !this.check_Edit
  }
}

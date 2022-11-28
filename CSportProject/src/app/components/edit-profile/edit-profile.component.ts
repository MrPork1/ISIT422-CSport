import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from 'src/app/User';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  editProfileForm = new FormGroup({
    fname : new FormControl(''),
    lname : new FormControl(''),
    bday : new FormControl('')
  })

  fname !: string;
  lname !: string;
  bday !: string;
  
  user !: User;

  constructor(
    private authService: AuthService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.user = this.authService.returnUserObject();
    this.fillValues(this.user);
  }

  fillValues(user: User) {
    this.fname = user.Fname;
    this.lname = user.Lname;
    this.bday = user.Birthday;
  }

  applyChanges() {
    const newUser = this.user;

    newUser.Fname = this.fname;
    newUser.Lname = this.lname;
    newUser.Birthday = this.bday;

    this.userService.editUser(this.user).subscribe();
  }

  deleteUser() {
    this.authService.deleteUser();
  }
}

import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'; //Import fireauth
import { Router } from '@angular/router'; //Import router
import { User } from '../User';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData!: User;
  newUserData: User[] = [];
  newnewUserData!: User;

  emptyUserData!: User;

  isLogin: boolean = false;
  roleAs: string = "Customer";

  constructor(
    private aAuth: AngularFireAuth,
    private router: Router,
    private userService: UserService) { }

  signInUsingFakeInformation(user: User) {
    this.userData = user;
    if (this.userData.Role == "1") {
      console.log('this is admin!');
      this.router.navigate(['/a-dashboard']);
    }
    else if (this.userData.Role == "0") {
      console.log('this is a customer!');
      this.router.navigate(['/c-dashboard']);
    }
  }

  login(email: string, password: string) { //Login with email and password.
    this.aAuth.signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Login success!');
        this.userService.getUser(value.user?.uid).subscribe(user => {
          this.newUserData = user;
          this.userData = user[0];
          console.log(this.userData);
          this.router.navigate(['/c-dashboard']);
        });
      })
  }

  emailSignUp(email: string, password: string, user: User) { //Sign up with email and password.
    this.aAuth.createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success', value);
        //this.userData = value.user;
        //Add mongoDB user here.
        this.addUserToMongoDB(value.user!.uid, user);
        console.log('sign up success!');
        this.router.navigate(['/signin']);
      })
      .catch(error => {
        console.log('Something went wrong: ', error);
      });
  }

  private addUserToMongoDB(uid: string, user: User) {
    //TODO: Replace User ID with uid
    user.UID = uid; //This works!
    this.userService.addUser(user).subscribe();
  }

  logout() { //Log the current user and rest fields.
    this.aAuth.signOut().then(() => {
      this.userData = this.emptyUserData;
      this.userData
      this.isLogin = false;
      this.roleAs = '';
      this.router.navigate(['/']);
    });
  }

  returnUserObject(): User {
    return this.userData;
  }

  get isLoggedIn(): boolean { //Gets a boolean on whether a user is logged in or not.
    if (this.userData !== undefined) {
      return true;
    }
    console.log('No user is signed in... returning to signin screen');
    return false;
  }
}
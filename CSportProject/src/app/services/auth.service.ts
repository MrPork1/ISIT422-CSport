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
      this.router.navigate(['/a-dashboard']);
    }
    else if (this.userData.Role == "0") {
      this.router.navigate(['/c-dashboard']);
    }
  }

  login(email: string, password: string) { //Login with email and password.
    this.aAuth.signInWithEmailAndPassword(email, password)
      .then(value => {
        this.userService.getUser(value.user?.uid).subscribe(user => {
          this.newUserData = user;
          this.userData = user[0];
          if (this.userData.Role == "1") {
            this.router.navigate(['/a-dashboard']);
          }
          else if (this.userData.Role == "0") {
            this.router.navigate(['/c-dashboard']);
          } else {
            console.error("Error logging in.");
            this.router.navigate(['/'])
          }
        });
      })
  }

  emailSignUp(email: string, password: string, user: User) { //Sign up with email and password.
    this.aAuth.createUserWithEmailAndPassword(email, password)
      .then(value => {
        //Add mongoDB user here.
        this.addUserToMongoDB(value.user!.uid, user);
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
      this.isLogin = false;
      this.roleAs = '';
      this.router.navigate(['/']);
    });
  }

  deleteUser() {
    if (this.isLoggedIn) {
      this.aAuth.currentUser
      .then(value => {
        value?.delete()
        .then(value2 => {
          this.userService.deleteUser(value.uid).subscribe(deletedUser => {
            console.log("User deleted from firebase and mongoDB! Returning to signin page.");
            this.userData = this.emptyUserData;
            this.isLogin = false;
            this.roleAs = '';
            this.router.navigate(['/signin']);
          });
        })
      })
      .catch(error => {
        console.log('Cant delete account from firebase: ', error);
      });
    }
  }

  returnUserObject(): User {
    return this.userData;
  }

  get isLoggedIn(): boolean { //Gets a boolean on whether a user is logged in or not.
    if (this.userData !== undefined) {
      return true;
    }
    return false;
  }
}
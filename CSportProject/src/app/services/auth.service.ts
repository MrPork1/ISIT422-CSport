import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'; //Import fireauth
import { Router } from '@angular/router'; //Import router

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: any;
  isLogin: boolean = false;
  roleAs: string = "Customer";

  constructor(
    private aAuth: AngularFireAuth,
    private router: Router) { }

    login(email: string, password: string) { //Login with email and password.
      console.log(email + password);
      this.aAuth.signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Login success!');
        this.router.navigate(['/profile']);
      })
    }

    emailSignUp(email: string, password: string) { //Sign up with email and password.
      this.aAuth.createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success', value);
        this.router.navigate(['/profile']);
      })
      .catch(error => {
        console.log('Something went wrong: ', error);
      });
    }

    logout() { //Log the current user and rest fields.
      this.aAuth.signOut().then(() => {
        this.userData = undefined;
        this.isLogin = false;
        this.roleAs = '';
        this.router.navigate(['/']);
      });
    }

    get isLoggedIn(): boolean { //Gets a boolean on whether a user is logged in or not.
      if (this.userData !== undefined) {
        return true;
      }
      console.log('No user is signed in... returning to signin screen');
      return false;
    }
}
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

    login(email: string, password: string) {
      this.aAuth.signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Login success!');
        this.router.navigate(['/profile']);
      })
    }
}

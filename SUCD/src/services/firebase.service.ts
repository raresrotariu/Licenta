import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth'
 

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  isLoggedIn=false;
  angularFireAuth: any;

  constructor(public firebaseAuth: AngularFireAuth) { }
  SignUp(email: string, password: string) {
    this.angularFireAuth
    .auth
    .createUserWithEmailAndPassword(email, password)
    .then(res => {
    console.log('You are Successfully signed up!', res);
    })
    .catch(error => {
    console.log('Something is wrong:', error.message);
    });
    }
    
    /* Sign in */
    SignIn(email: string, password: string) {
    this.angularFireAuth
    .auth
    .signInWithEmailAndPassword(email, password)
    .then(res => {
    console.log('You're in!');
    })
    .catch(err => {
    console.log('Something went wrong:',err.message);
    });
    }
    
    /* Sign out */
    SignOut() {
    this.angularFireAuth
    .auth
    .signOut();
    }

}

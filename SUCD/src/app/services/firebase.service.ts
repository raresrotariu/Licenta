import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth'
import { Users } from 'src/app/shared/users.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  isLoggedIn=false;
  loginerror=0;

  constructor(public fireservices : AngularFirestore,public firebaseAuth: AngularFireAuth) { }
  
  async singin(email: string, password : string){
    this.loginerror=0;
    await this.firebaseAuth.signInWithEmailAndPassword(email,password)
    .then(res=>{
      this.isLoggedIn = true
      localStorage.setItem('user',JSON.stringify(res.user))
    })
    .catch((error)=>{
      this.loginerror=1;
      console.log("nu mergeee");
    })
  }

  async singup(email: string, password : string){
    await this.firebaseAuth.createUserWithEmailAndPassword(email,password)
    .then(res=>{
      this.isLoggedIn = true
      localStorage.setItem('user',JSON.stringify(res.user))
      console.log(res.user?.uid)
      this.fireservices.collection('Users').doc(res.user?.uid).set({
        Email: email,
        Nume: "",
        Prenume: "",
         Varsta: "",
        Adresa: "",
        Judet: "",
         Oras: "",
         Abonament:"0",
         Masini:"0",
         Admin:"0",
      })
    })
  }

  logout(){
    this.firebaseAuth.signOut()
    localStorage.removeItem('user')
  }


}

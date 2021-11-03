import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth'
import { Users } from 'src/shared/users.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  isLoggedIn=false;

  constructor(public fireservices : AngularFirestore,public firebaseAuth: AngularFireAuth) { }
  async singin(email: string, password : string){
    await this.firebaseAuth.signInWithEmailAndPassword(email,password)
    .then(res=>{
      this.isLoggedIn = true
      localStorage.setItem('user',JSON.stringify(res.user))

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
         Oras: ""
      })
    })
  }

  logout(){
    this.firebaseAuth.signOut()
    localStorage.removeItem('user')
  }


}

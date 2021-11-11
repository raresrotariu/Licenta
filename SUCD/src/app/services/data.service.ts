import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Users } from './../shared/users.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public firebaseAuth : AngularFireAuth,
    public afs: AngularFirestore,
    ) { }


    getData(){
      var ownerID=JSON.parse(localStorage.getItem('user') ||'{}').uid;
      return this.afs.collection('Users').doc(ownerID).ref.get().then(doc=>{
        if(doc.exists)
        {
        return doc.data() as Users;
        }
        else
        console.log("Nu exista");
      })

    }

    updateData(Users:Users){
      var ownerID = JSON.parse(localStorage.getItem('user')||'{}');
      console.log(ownerID);
      this.afs.collection('Users').doc(ownerID.uid).update({
        Nume:Users.Nume,
        Prenume:Users.Prenume,
        Adresa:Users.Adresa,
        Judet:Users.Judet,
        Oras:Users.Oras,
        Varsta:Users.Varsta,
        Abonament:Users.Abonament,

      })
    }





}

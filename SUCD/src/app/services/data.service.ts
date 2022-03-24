import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Car } from '../shared/car.model';
import { Users } from './../shared/users.model';
import { map } from 'rxjs/operators';
import{} from '@angular/fire/storage';
import { Filedata } from '../shared/filedata';

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
        Masini:Users.Masini,

      })


    }

    getDataCar(){
      var ownerID=JSON.parse(localStorage.getItem('user') ||'{}').uid;
      return this.afs.collection('Cars').doc(ownerID).ref.get().then(doc=>{
        if(doc.exists)
        {
        return doc.data() as Car;
        }
        else
        console.log("Nu exista masina");
      })
    }

    pushDataCar(Car:Car){
      var res = JSON.parse(localStorage.getItem('user')||'{}');
      this.afs.collection('Cars').doc(res.user?.uid).set({
        Email: Car.Email,
        Nume: Car.Nume,
        Prenume: Car.Prenume,
        NrMasina:Car.Nrmasina,
        CodMasina:Car.Codmasina,
        Accident:Car.Accident,
        Marca:Car.Marca,
        Model:Car.Model,
        Id:Car.id,

      })


    }


    saveFile(fileObj:Filedata)
    {
      const fileData={
        id:'',
        name:fileObj.name,
        url : fileObj.url,
        email: fileObj.email,
        cod: fileObj.cod,
      }

      fileData.id=this.afs.createId();

      this.afs.collection('/Upload').add(fileData);



    }



    getFile(){
      this.afs.collection('/Uploads').snapshotChanges();
    }




}

function getRentersFromCurrentOwner() {
  throw new Error('Function not implemented.');
}


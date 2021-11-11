import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Car } from './car.model';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  formData!: Car;
  constructor(public fireservices : AngularFirestore) { }

  create_masina(car:Car){
    return this.fireservices.collection('Car').add(Object.assign({},car));
  }


}

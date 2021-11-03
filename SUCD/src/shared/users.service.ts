import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Users } from './users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  formData!: Users;
  constructor(public fireservices : AngularFirestore) { }

  create_user(Users: Users){
    return this.fireservices.collection('Users').add(Object.assign({},Users));
  }

}

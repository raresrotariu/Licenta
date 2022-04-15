import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { from, Observable } from 'rxjs';
import { DataService } from '../services/data.service';
import { FirebaseService } from '../services/firebase.service';
import { Car } from '../shared/car.model';
import { Item } from '../shared/item';
import { Users } from '../shared/users.model';

@Component({
  selector: 'app-admin-data',
  templateUrl: './admin-data.component.html',
  styleUrls: ['./admin-data.component.css']
})
export class AdminDataComponent implements OnInit {

  @Input() hero: Users|undefined;
  car:Car|undefined
  items:Observable<Item[]>
  books:Item[]

  constructor(public firebaseService: FirebaseService,public router:Router,
    public firestore: AngularFirestore,public data: DataService,public dialog: MatDialog,
    public cars:DataService,public storage : AngularFireStorage) {  }

  ngOnInit(): void {
    this.getCurrentDataCar()
  }


  getCurrentDataCar(){
    var carowner= from(this.cars.getDataCar())
    carowner.subscribe(carown=>{
     this.car=carown;
    // console.log(this.car)
    })

    let i:number =0;


    this.items = this.firestore.collection<Item>('Cars').valueChanges()

    this.items.subscribe(books=>{

      this.books=books
      console.log(books)
      while(i<10){
        if(books[i])
        if(books[i].Email==this.hero?.Email)
        {console.log(books[i])

        }
        i++

      }
    //  console.log(books)

    i=0;

        var ownerId = JSON.parse(localStorage.getItem('user')||'{}').uid;
        //console.log(ownerId);
         this.firestore.collection('Cars').get().subscribe((snapshot)=>{
           snapshot.forEach(doc=>{
             books[i].UID=doc.id;
             console.log(doc.id,'=>',doc.data())
             i++
           })
         })

        // console.log(books)


    })
  }


}

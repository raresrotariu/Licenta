import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { User } from 'firebase/auth';
import { from, Observable } from 'rxjs';
import { DataService } from '../services/data.service';
import { FirebaseService } from '../services/firebase.service';
import { Car } from '../shared/car.model';
import { Filedata } from '../shared/filedata';
import { Item } from '../shared/item';
import { Users } from '../shared/users.model';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  @Input() item: Users
  abonament:any
  verificare:any

  merge:Users|undefined
  car:Car|undefined
  items:Observable<Item[]>
  books:Item[]
  actions:Item[]
  user:Users[]
  child:Users|undefined

  selectedFiles!:FileList;
  currentFile !: Filedata;
  percentage : number=0;

  listOfFiles : Filedata[]=[];

  trece: Observable<Users[]>;
  fisiere: Observable<Filedata[]>;
  fisiera: Filedata[];

  @Output() isLogout= new EventEmitter<void>()

  constructor(public firebaseService: FirebaseService,public router:Router,
    public firestore: AngularFirestore,public data: DataService,public dialog: MatDialog,
    public cars:DataService,public storage : AngularFireStorage,) { }

  ngOnInit(): void {
    this.getCurrentData()
    this.getCurrentDataCar()
    this.getFilesnew()
  //  this.setdataneutral()

  }

  getCurrentData(){
  //  var obsowners= from(this.data.getData())
  //  obsowners.subscribe(owners=>{
  //    this.merge=owners;
      //console.log("Owner curent: ");
  //    console.log(this.merge)
     // console.log(this.merge?.Email)
      //window.alert(this.owner.mod_plata1);
      //console.log(this.owner);
  //  })

    this.trece = this.firestore.collection<Users>('Users').valueChanges()
    this.trece.subscribe(user=>{
      this.user=user;
      console.log(user);
    })
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
        if(books[i].Email==this.merge?.Email)
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

  getAllFiles(){
    this.data.getFile().subscribe(res =>{
      this.listOfFiles=res.map((e:any)=>{
        const file = e.payload.doc.file();
        file.id= e.payload.doc.id;
       console.log(file);
        return file;
      });
    },err=>{
      console.log('Error fetching filedata');
    })
  }

  getFilesnew(){
    this.fisiere = this.firestore.collection<Filedata>('Upload').valueChanges()
    console.log(this.fisiere);

    this.fisiere.subscribe(fisiera=>{
      this.fisiera=fisiera
      console.log(fisiera[0])
    })


  }

  logout(){
    this.firebaseService.logout()
    this.isLogout.emit()
    this.router.navigate([''])
  }

  setdata(item:Users){
    this.child=item;
  }


}

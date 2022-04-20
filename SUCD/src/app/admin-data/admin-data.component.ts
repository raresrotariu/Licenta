import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { from, Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { DataService } from '../services/data.service';
import { FirebaseService } from '../services/firebase.service';
import { Car } from '../shared/car.model';
import { Filedata } from '../shared/filedata';
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

  selectedFiles!:FileList;
  currentFile !: Filedata;
  percentage : number=0;

  listOfFiles : Filedata[]=[];

  fisiere: Observable<Filedata[]>;
  fisiera: Filedata[];

  constructor(public firebaseService: FirebaseService,public router:Router,
    public firestore: AngularFirestore,public data: DataService,public dialog: MatDialog,
    public cars:DataService,public storage : AngularFireStorage) {  }

  ngOnInit(): void {
    this.getCurrentDataCar()
    this.getFilesnew()
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

  selectFile(event:any){
    this.selectedFiles = event.target.files;
    console.log("selected file: ",this.selectedFiles.item);
  }

  async uploadFile(email:string|undefined){
   // const storage = getStorage();
   console.log(this.selectedFiles[0]);
    this.currentFile = new Filedata(this.selectedFiles[0]);
    console.log("1");
    const path = 'Uploads/'+this.currentFile.file.name;
    console.log("1");
    const storageRef = this.storage.ref(path);
    const uploadTask = storageRef.put(this.selectedFiles[0]);

     uploadTask.snapshotChanges().pipe(finalize(()=>{
      storageRef.getDownloadURL().subscribe(downloadLink =>{
        this.currentFile.url=downloadLink;
        this.currentFile.name=this.currentFile.file.name;
        if(email!=undefined){
          this.currentFile.email=email;
          }
          this.currentFile.citit='0';

         this.data.saveFile(this.currentFile);
      },)
    })).subscribe((res:any)=>{
      //this.percentage=(res.bytesTransferred*100/res.res.totalBytes);
    },err=>{
      console.log('Error occured');
    }
    )
  }

  deleteFile(fisiera :Filedata){
    if(window.confirm('Are you sure you want to delate'+fisiera.name+'?')){
      this.data.deleteFile(fisiera);

      //this.ngOnInit();
    }
  }

  getFilesnew(){
    this.fisiere = this.firestore.collection<Filedata>('Upload').valueChanges()
    console.log(this.fisiere);

    this.fisiere.subscribe(fisiera=>{

      this.fisiera=fisiera
      console.log(fisiera[0])
    })


  }


}

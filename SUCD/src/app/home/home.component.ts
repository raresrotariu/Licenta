import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { from, Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { MatDialogModule } from '@angular/material/dialog';




import { FirebaseService } from 'src/app/services/firebase.service';
import { Users } from 'src/app/shared/users.model';
import { state } from '@angular/animations';
import { MasinaComponent } from '../masina/masina.component';
import { Car } from '../shared/car.model';
import { Item } from '../shared/item';
import { map } from 'rxjs/operators';
import { snapshotChanges } from '@angular/fire/compat/database';
import { Filedata } from '../shared/filedata';
import { getStorage, ref } from 'firebase/storage';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public isCollapsed = false;
  @Input() item: Users
  abonament:any
  verificare:any

  merge:Users|undefined
  car:Car|undefined
  items:Observable<Item[]>
  books:Item[]
  actions:Item[]

  selectedFiles!:FileList;
  currentFile !: Filedata;
  percentage : number=0;

  @Output() isLogout= new EventEmitter<void>()
  constructor(public firebaseService: FirebaseService,public router:Router,
    public firestore: AngularFirestore,public data: DataService,public dialog: MatDialog,
    public cars:DataService,//public storage : FirebaseStorage,
    ) { }



  ngOnInit(){
    if(localStorage.getItem('user')!==null)
    console.log("merge")
    else
    console.log("nu merge")

    let date=localStorage.getItem('user')
  //  console.log(date)

    this.getCurrentData()
    this.getCurrentDataCar()


  }


  getCurrentData(){
    var obsowners= from(this.data.getData())
    obsowners.subscribe(owners=>{
      this.merge=owners;
      //console.log("Owner curent: ");
      console.log(this.merge)
     // console.log(this.merge?.Email)
      //window.alert(this.owner.mod_plata1);
      //console.log(this.owner);
      this.verificareAbonament()
    })
  }

  getCurrentDataCar(){
    var carowner= from(this.cars.getDataCar())
    carowner.subscribe(carown=>{
     this.car=carown;
     console.log(this.car)
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
        console.log(ownerId);
         this.firestore.collection('Cars').get().subscribe((snapshot)=>{
           snapshot.forEach(doc=>{
             books[i].UID=doc.id;
             console.log(doc.id,'=>',doc.data())
             i++
           })
         })

         console.log(books)


    })
  }

  logout(){
    this.firebaseService.logout()
    this.isLogout.emit()
    this.router.navigate([''])
  }

  openModal1() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose=false;
    dialogConfig.data=this.merge
      this.dialog.open(ModalComponent,dialogConfig);
  }

  openModal2() {

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose=false;
    dialogConfig.data=this.merge
      this.dialog.open(MasinaComponent,dialogConfig);
  }

  standard(){
    this.router.navigate(['app-bank'],{state:{da:2}});
  }

  instalare(){
    this.router.navigate(['app-instalare']);
  }

  premium(){
    this.router.navigate(['app-bank'],{state:{da:5}});
  }

  verificareAbonament(){
    console.log(this.merge?.Abonament)
    if(this.merge?.Abonament=="2"){
      this.abonament="Abonament Standard"
      this.verificare=true
    }else
    if(this.merge?.Abonament=="5"){
      this.abonament="Abonament Premiu"
      this.verificare=true
    }
    else{
      this.abonament="Nu exista abonament"
      this.verificare=false
    }
  }

  stergereMasini(){
    if(this.merge?.Masini=='1')
      {this.merge.Masini='0'
      this.data.updateData(this.merge)}
      if(this.merge?.Masini=='2')
      {this.merge.Masini='1'
      this.data.updateData(this.merge)}
      if(this.merge?.Masini=='3')
      {this.merge.Masini='2'
      this.data.updateData(this.merge)}
      if(this.merge?.Masini=='4')
      {this.merge.Masini='3'
      this.data.updateData(this.merge)}
      if(this.merge?.Masini=='5')
      {this.merge.Masini='4'
      this.data.updateData(this.merge)}
  }


  deleteCar(value:string|undefined){
    console.log(value)
   this.firestore.collection('Cars').doc(value).delete()
   this.stergereMasini();
  }

  selectFile(event:any){
    this.selectedFiles = event.target.files;
  }

  uploadFile(){
    const storage = getStorage();
    this.currentFile= new Filedata(this.selectedFiles[0]);
  //  const path = 'Uploads/'+this.currentFile.file.name;

  //  const storageRef = ref(storage,path);
  //  const uploadTask = storageRef.put(this.selectFile[0]);

  //  uploadTask.snapshotChanges().pipe(finalize(()=>{

  //  }).subscribe

  //  )

  }








}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { MatDialogModule } from '@angular/material/dialog';



import { FirebaseService } from 'src/app/services/firebase.service';
import { Users } from 'src/app/shared/users.model';
import { state } from '@angular/animations';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public isCollapsed = false;
  @Input() item: Users
  abonament:any


  merge:Users|undefined

  @Output() isLogout= new EventEmitter<void>()
  constructor(public firebaseService: FirebaseService,public router:Router,
    public firestore: AngularFirestore,public data: DataService,public dialog: MatDialog) { }



  ngOnInit(){
    if(localStorage.getItem('user')!==null)
    console.log("merge")
    else
    console.log("nu merge")

    let date=localStorage.getItem('user')
    console.log(date)

    this.getCurrentData()


  }


  getCurrentData(){
    var obsowners= from(this.data.getData())
    obsowners.subscribe(owners=>{
      this.merge=owners;
      //console.log("Owner curent: ");
      console.log(this.merge)
      console.log(this.merge?.Email)
      //window.alert(this.owner.mod_plata1);
      //console.log(this.owner);
      this.verificareAbonament()
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

  standard(){
    this.router.navigate(['app-bank'],{state:{da:1}});
  }

  premium(){
    this.router.navigate(['app-bank'],{state:{da:2}});
  }

  verificareAbonament(){
    console.log(this.merge?.Abonament)
    if(this.merge?.Abonament=="1"){
      this.abonament="Abonament Standard"
    }else
    if(this.merge?.Abonament=="2"){
      this.abonament="Abonament Premium"
    }
    else{
      this.abonament="Nu exista abonament"
    }
  }


 // const docRef = db.collection('users').doc('alovelace');

/*await docRef.set({
  first: 'Ada',
  last: 'Lovelace',
  born: 1815
});*/

}

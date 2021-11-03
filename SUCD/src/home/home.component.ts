import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { firestore } from 'firebase-admin';
import { from } from 'rxjs';
import { DataService } from 'src/services/data.service';




import { FirebaseService } from 'src/services/firebase.service';
import { Users } from 'src/shared/users.model';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  merge:Users|undefined

  @Output() isLogout= new EventEmitter<void>()
  constructor(public firebaseService: FirebaseService,public router:Router,
    public firestore: AngularFirestore,public data: DataService) { }



  ngOnInit(){
    if(localStorage.getItem('user')!==null)
    console.log("merge")
    else
    console.log("nu merge")

    let date=localStorage.getItem('user')
    console.log(date)

   // this.merge = this.data.getData()

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
    })
  }

  logout(){
    this.firebaseService.logout()
    this.isLogout.emit()
    this.router.navigate([''])
  }

 // const docRef = db.collection('users').doc('alovelace');

/*await docRef.set({
  first: 'Ada',
  last: 'Lovelace',
  born: 1815
});*/

}

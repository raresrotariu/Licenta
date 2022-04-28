import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';
import { DataService } from '../services/data.service';
import { from, Observable } from 'rxjs';
import { Users } from '../shared/users.model';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isSignedIn=false
  admins:Users|undefined;
  //loginerror:any=0;
  isLoggedIn=false;


  constructor(public firebaseService : FirebaseService, public router:Router, public data:DataService,public firebaseAuth: AngularFireAuth) {

  }

  ngOnInit() : void {
    if(localStorage.getItem('user')!==null)
    this.isSignedIn=true
    else
    this.isSignedIn=false

  }


  async onSingin(email:string,password:string){
    await this.firebaseService.singin(email,password)
   // await this.verificareSingin(email,password)
    console.log(email)
    console.log(password)
    if(this.firebaseService.isLoggedIn)
    {this.isSignedIn = true
    this.router.navigate(['app-home'])
    }
  }

  //
  //async verificareSingin(email:string,password:string){
   // this.loginerror=0;
   // await this.firebaseAuth.signInWithEmailAndPassword(email,password)
   // .then(res=>{
   //   this.isLoggedIn = true
   //   localStorage.setItem('user',JSON.stringify(res.user))
      
   // })
   // .catch((error)=>{
    //  this.loginerror=1;
   //   console.log("nu mergeee");
   // })

 // }



  async adminSingin(email:string,password:string){
    await this.firebaseService.singin(email,password)
    //await this.verificareSingin(email,password)
    console.log(email)
    console.log(password)
    if(this.firebaseService.isLoggedIn){
      var obsowners= from(this.data.getData())
      obsowners.subscribe(admin=>{
      this.admins=admin;
      console.log(this.admins);
      if(this.admins?.Admin=='1')
      {this.router.navigate(['app-admin'])}
      

    })
    }
  }


  handleLogout(){
    this.isSignedIn = false
}


}

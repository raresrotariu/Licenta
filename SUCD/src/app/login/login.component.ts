import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';
import { DataService } from '../services/data.service';
import { from, Observable } from 'rxjs';
import { Users } from '../shared/users.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isSignedIn=false
  admins:Users|undefined;



  constructor(public firebaseService : FirebaseService, public router:Router, public data:DataService) {

  }

  ngOnInit() : void {
    if(localStorage.getItem('user')!==null)
    this.isSignedIn=true
    else
    this.isSignedIn=false

  }


  async onSingin(email:string,password:string){
    await this.firebaseService.singin(email,password)
    console.log(email)
    console.log(password)
    if(this.firebaseService.isLoggedIn)
    {this.isSignedIn = true
    this.router.navigate(['app-home'])
    }
  }

  async adminSingin(email:string,password:string){
    await this.firebaseService.singin(email,password)
    console.log(email)
    console.log(password)
    if(this.firebaseService.isLoggedIn){
      var obsowners= from(this.data.getData())
      obsowners.subscribe(admin=>{
      this.admins=admin;
      console.log(this.admins);
      if(this.admins?.Admin=='1')
      {this.router.navigate(['app-admin'])}
      else
      {
        console.log("Nu e admin");
      }

    })
    }
  }


  handleLogout(){
    this.isSignedIn = false
}


}

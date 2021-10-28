import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { FirebaseService } from 'src/services/firebase.service';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit {

  isSignedIn=false


  constructor(public firebaseService : FirebaseService) { }

  ngOnInit() {
    if(localStorage.getItem('user')!==null)
    this.isSignedIn=true
    else
    this.isSignedIn=false
  }

  async onSignup(email:string,password:string){
    await this.firebaseService.singup(email,password)
    console.log(email)
    console.log(password)
    if(this.firebaseService.isLoggedIn)
    this.isSignedIn = true
  }

  async onSingin(email:string,password:string){
    await this.firebaseService.singup(email,password)
    console.log(email)
    console.log(password)
    if(this.firebaseService.isLoggedIn)
    this.isSignedIn = true
  }

    handleLogout(){
        this.isSignedIn = false
    }

}

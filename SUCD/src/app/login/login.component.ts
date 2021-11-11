import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isSignedIn=false



  constructor(public firebaseService : FirebaseService, public router:Router) {

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


  handleLogout(){
    this.isSignedIn = false
}


}

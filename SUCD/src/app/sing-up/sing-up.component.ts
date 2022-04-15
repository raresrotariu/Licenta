import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NgForm } from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UsersService } from 'src/app/shared/users.service';
import {Users} from 'src/app/shared/users.model'
import { Router } from '@angular/router';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit {

  isSignedIn=false
  error:any

  constructor(public firebaseService : FirebaseService,public usersservice: UsersService,
    public firestore: AngularFirestore,public router:Router) { }

  ngOnInit() {
    if(localStorage.getItem('user')!==null)
    this.isSignedIn=true
    else
    this.isSignedIn=false
  }

  async onSignup(email:string,password:string){
    this.error="Contul exista deja."
    await this.firebaseService.singup(email,password)
    console.log(email)
    console.log(password)
    if(this.firebaseService.isLoggedIn)
    {this.isSignedIn = true
      this.router.navigate(['app-home'])
    }
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

    resetForm(form?: NgForm) {
      if (form != null)
        form.resetForm();
      this.usersservice.formData = {
        id: '',
        Email:'',
        Nume: '',
        Prenume: '',
        Varsta: '',
        Adresa: '',
        Judet: '',
        Oras: '',
        Abonament:'0',
        Masini:'0',
        Admin:'0',
      }
    }

    onSubmit(form: NgForm) {
      let data = Object.assign({}, form.value);
      delete data.id;
      if (form.value.id == null)
        this.firestore.collection('employees').add(data);
      else
        this.firestore.doc('employees/' + form.value.id).update(data);
      this.resetForm(form);
    }

    Nume:string;
    Prenume: string;


    	CreateRecord(){
        let Record = new Users ;
        Record['Nume']=this.Nume;
        Record['Prenume']=this.Prenume;

        this.usersservice.create_user(Record).then(res =>{
            this.Nume="";
            this.Prenume="";

            console.log(res);
        }).catch(error =>{
          console.log(error);
        })


      }


}

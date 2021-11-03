import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AngularFireModule} from '@angular/fire'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from '../login/login.component';
import { SingUpComponent } from '../sing-up/sing-up.component';
import { FirebaseService } from 'src/services/firebase.service';
import { HomeComponent } from '../home/home.component';
import {AngularFirestoreModule} from "@angular/fire/firestore"
import { MembersComponent } from '../members/members.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { UsersService } from 'src/shared/users.service';
import {AngularFireDatabaseModule} from '@angular/fire/database';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SingUpComponent,
    HomeComponent,
    MembersComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FormsModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    HttpModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDL3wmCFclCGqHcklMh_XImLBwYqXoVEZY",
      authDomain: "sucd-database.firebaseapp.com",
      projectId: "sucd-database",
      storageBucket: "sucd-database.appspot.com",
      messagingSenderId: "1034313338206",
      appId: "1:1034313338206:web:473760fc9916c82f6013cf",
      measurementId: "G-C7K6JN4KH3"
    })

  ],
  providers: [UsersService,FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }

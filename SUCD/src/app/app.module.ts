import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AngularFireModule} from '@angular/fire'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from '../login/login.component';
import { SingUpComponent } from '../sing-up/sing-up.component';
import { FirebaseService } from 'src/services/firebase.service';
import { HomeComponent } from '../home/home.component';
import {HttpModule} from '@angular/http';
import { MembersComponent } from '../members/members.component';
import { FormsModule } from '@angular/forms';

export const firebaseConfig = {
  apiKey: "AIzaSyDL3wmCFclCGqHcklMh_XImLBwYqXoVEZY",
      authDomain: "sucd-database.firebaseapp.com",
      projectId: "sucd-database",
      storageBucket: "sucd-database.appspot.com",
      messagingSenderId: "1034313338206",
      appId: "1:1034313338206:web:473760fc9916c82f6013cf",
      measurementId: "G-C7K6JN4KH3"
};


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
    AppRoutingModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }

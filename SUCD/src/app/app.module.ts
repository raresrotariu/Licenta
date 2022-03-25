import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { AngularFireModule } from '@angular/fire/compat';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MembersComponent } from './members/members.component';
import { SingUpComponent } from './sing-up/sing-up.component';
import { ModalComponent } from './modal/modal.component';

import { MatDialogModule } from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import { UsersService } from './shared/users.service';
import { FirebaseService } from './services/firebase.service';
import { BankComponent } from './bank/bank.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MasinaComponent } from './masina/masina.component';
import { UppageComponent } from './uppage/uppage.component';
import { DetailComponent } from './detail/detail.component';
import { InstalareComponent } from './instalare/instalare.component';
import { DownpageComponent } from './downpage/downpage.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';
import { providePerformance,getPerformance } from '@angular/fire/performance';
import { provideRemoteConfig,getRemoteConfig } from '@angular/fire/remote-config';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SingUpComponent,
    HomeComponent,
    MembersComponent,
    ModalComponent,
    BankComponent,
    MasinaComponent,
    UppageComponent,
    DetailComponent,
    InstalareComponent,
    DownpageComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatDialogModule,
    AngularFireStorageModule,
    MatTableModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDL3wmCFclCGqHcklMh_XImLBwYqXoVEZY",
      authDomain: "sucd-database.firebaseapp.com",
      projectId: "sucd-database",
      storageBucket: "sucd-database.appspot.com",
      messagingSenderId: "1034313338206",
      appId: "1:1034313338206:web:473760fc9916c82f6013cf",
      measurementId: "G-C7K6JN4KH3"
    }),
    NgbModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),


  ],
  providers: [UsersService,FirebaseService, ScreenTrackingService,UserTrackingService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

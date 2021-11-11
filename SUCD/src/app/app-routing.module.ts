import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankComponent } from './bank/bank.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MembersComponent } from './members/members.component';
import { SingUpComponent } from './sing-up/sing-up.component';

const routes: Routes = [
  {   path: '', component: LoginComponent },
  {   path:'app-sing-up', component: SingUpComponent  },
  {   path:'app-member' , component: MembersComponent},
  {   path:'app-home', component: HomeComponent },
  {   path:'app-bank',component:BankComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

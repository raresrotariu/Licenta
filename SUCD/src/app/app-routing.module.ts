import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankComponent } from './bank/bank.component';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MembersComponent } from './members/members.component';
import { SingUpComponent } from './sing-up/sing-up.component';
import { UppageComponent } from './uppage/uppage.component';

const routes: Routes = [
  {   path: '', component: DetailComponent },
  {   path:'app-sing-up', component: SingUpComponent  },
  {   path:'app-member' , component: MembersComponent},
  {   path:'app-home', component: HomeComponent },
  {   path:'app-bank',component:BankComponent},
  {   path:'app-uppage',component:UppageComponent},
  {   path:'app-login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

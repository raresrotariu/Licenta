import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDataComponent } from './admin-data/admin-data.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { BankComponent } from './bank/bank.component';
import { DetailComponent } from './detail/detail.component';
import { DownpageComponent } from './downpage/downpage.component';
import { HomeComponent } from './home/home.component';
import { InstalareComponent } from './instalare/instalare.component';
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
  {   path:'app-login',component:LoginComponent},
  {   path:'app-detail',component:DetailComponent},
  {   path:'app-instalare',component:InstalareComponent},
  {   path:'app-downpage',component:DownpageComponent},
  {   path:'app-admin',component:AdminPageComponent},
  {   path:'app-admin-data',component:AdminDataComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

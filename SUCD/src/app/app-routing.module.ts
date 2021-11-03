import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/home/home.component';
import { LoginComponent } from 'src/login/login.component';
import { MembersComponent } from 'src/members/members.component';
import { SingUpComponent } from 'src/sing-up/sing-up.component';

const routes: Routes = [
  {   path: '', component: LoginComponent },
  {   path:'app-sing-up', component: SingUpComponent  },
  {   path:'app-member' , component: MembersComponent},
  {   path:'app-home', component: HomeComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

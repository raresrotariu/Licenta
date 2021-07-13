import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/login/login.component';
import { SingUpComponent } from 'src/sing-up/sing-up.component';

const routes: Routes = [
  {   path: 'app-login', component: LoginComponent },
  {   path:'app-sing-up', component: SingUpComponent  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
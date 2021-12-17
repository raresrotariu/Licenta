import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { DataService } from '../services/data.service';
import { Users } from '../shared/users.model';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {

  constructor(public router:Router,public data: DataService) { }

  merge:Users|undefined;
   nr:any;

  ngOnInit(): void {
    let date=localStorage.getItem('user')
    console.log(date)
    console.log(history.state.da)
    this.pret()
   // this.verificareActiv()
    this.getCurrentData()
  }

  updateData(){
    if(history.state.da==2){
      this.getCurrentData()
      this.merge!.Abonament=history.state.da;
      console.log(this.merge);
      this.data.updateData(this.merge!);
    }
    if(history.state.da==5){
      this.getCurrentData()
      this.merge!.Abonament=history.state.da;
      console.log(this.merge);
      this.data.updateData(this.merge!);
    }
    this.router.navigate(['app-home'])
  }

  getCurrentData(){
    var obsowners= from(this.data.getData())
    obsowners.subscribe(owners=>{
      this.merge=owners;
    })
  }

  anulare(){
    this.router.navigate(['app-home'])
  }

  pret(){
    if(history.state.da==2){
      this.nr=50
    }else
    if(history.state.da==5){
      this.nr=250
    }
  }

  verificareActiv(){
    if(!history.state.da){
      this.router.navigate(['app-home'])
    }

  }


}

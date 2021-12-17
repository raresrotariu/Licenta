import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { Users } from '../shared/users.model';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from '../services/data.service';
import { Car } from '../shared/car.model';
import { from } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-masina',
  templateUrl: './masina.component.html',
  styleUrls: ['./masina.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MasinaComponent implements OnInit {

  modal !:FormGroup;
  merge:Users|undefined

  constructor(public dialog: MatDialog,
    public dialogRef: MatDialogRef<ModalComponent>,
    public formBuilder:FormBuilder,
    public dataservice:DataService,
    @Inject(MAT_DIALOG_DATA) public data: Car,
    public car: DataService,
    public firestore:AngularFirestore,
    public router:Router,

  ) { }



  ngOnInit(): void {
    console.log("open modal masina")
    console.log(this.data)
    console.log(this.data.Email)
    this.generateForm()
    this.getCurrentData()

  }

  generateForm(){
    this.modal=this.formBuilder.group({
      Nume:this.data.Nume,
      Prenume:this.data.Prenume,
      Email:this.data.Email,
      Marca:"",
      Model:"",
      NrMasina:"",
      CodMasina:"",
      Accidente:"",
      UID:"",

    })
  }

  getData(){
    var user = JSON.parse(localStorage.getItem('user')||'{}');
    console.log(user.uid)
    this.data.Nume=this.modal.value.Nume;
    this.data.Prenume=this.modal.value.Prenume;
    this.data.Email=this.modal.value.Email;
    this.data.Nrmasina=this.modal.value.NrMasina;
    this.data.Codmasina=this.modal.value.CodMasina;
    this.data.Accident=this.modal.value.Accidente;
    this.data.Model=this.modal.value.Model;
    this.data.Marca=this.modal.value.Marca;
    this.data.id=user.uid;

    console.log(this.data);
    this.dataservice.pushDataCar(this.data);
    this.updateData();
    this.dialogRef.close();


  }

  getCurrentData(){
    var obsowners= from(this.car.getData())
    obsowners.subscribe(owners=>{
      this.merge=owners;
    })
  }

  updateData(){
    if(this.merge?.Masini=='4')
      {this.merge.Masini='5'
      this.car.updateData(this.merge)}
      if(this.merge?.Masini=='3')
      {this.merge.Masini='4'
      this.car.updateData(this.merge)}
      if(this.merge?.Masini=='2')
      {this.merge.Masini='3'
      this.car.updateData(this.merge)}
      if(this.merge?.Masini=='1')
      {this.merge.Masini='2'
      this.car.updateData(this.merge)}
      if(this.merge?.Masini=='0')
      {this.merge.Masini='1'
      this.car.updateData(this.merge)}
  }


}

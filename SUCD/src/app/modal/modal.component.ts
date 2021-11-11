import { Component, Inject, OnInit, TemplateRef, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { from } from 'rxjs';
import { DataService } from '../services/data.service';
import { Users } from '../shared/users.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnInit {

  modal !:FormGroup;
  Userobj:Users=new Users();


  constructor(public dialog: MatDialog,
    public dialogRef: MatDialogRef<ModalComponent>,
    public formBuilder:FormBuilder,
    public dataservice:DataService,
    @Inject(MAT_DIALOG_DATA) public data: Users,
    ) {
    }

  ngOnInit(): void {
    console.log("open modal")
    console.log(this.data)
    console.log(this.data.Email)
    this.generateForm();

  }


  generateForm(){
    this.modal=this.formBuilder.group({
      Nume:this.data.Nume,
      Prenume:this.data.Prenume,
      Email:this.data.Email,
      Judet:this.data.Judet,
      Oras:this.data.Oras,
      Adresa:this.data.Adresa,
      Varsta:this.data.Varsta,
      Abonament:this.data.Abonament,
    })
  }

  getData(){
    this.Userobj.Nume=this.modal.value.Nume;
    this.Userobj.Prenume=this.modal.value.Prenume;
    this.Userobj.Email=this.modal.value.Email;
    this.Userobj.Judet=this.modal.value.Judet;
    this.Userobj.Oras=this.modal.value.Oras;
    this.Userobj.Adresa=this.modal.value.Adresa;
    this.Userobj.Varsta=this.modal.value.Varsta;
    this.Userobj.Abonament=this.modal.value.Abonament;

    console.log(this.Userobj);
    this.dataservice.updateData(this.Userobj);
    this.dialogRef.close();

  }




  updateData(){
    console.log(this.data);
    var currentUser=this.modal.value as Users;
    this.dataservice.updateData(currentUser);
    console.log(this.data);
  }


}

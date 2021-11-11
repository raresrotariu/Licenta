import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { Users } from '../shared/users.model';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { FormBuilder } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-masina',
  templateUrl: './masina.component.html',
  styleUrls: ['./masina.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MasinaComponent implements OnInit {

  constructor(public dialog: MatDialog,
    public dialogRef: MatDialogRef<ModalComponent>,
    public formBuilder:FormBuilder,
    public dataservice:DataService,
    @Inject(MAT_DIALOG_DATA) public data: Users

  ) { }



  ngOnInit(): void {
    console.log("open modal masina")
    console.log(this.data)
    console.log(this.data.Email)

  }

}

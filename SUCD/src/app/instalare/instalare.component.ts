import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instalare',
  templateUrl: './instalare.component.html',
  styleUrls: ['./instalare.component.css']
})
export class InstalareComponent implements OnInit {

  constructor( public router:Router) { }

  ngOnInit(): void {
  }

  back(){
    this.router.navigate(['app-home'])
  }

}

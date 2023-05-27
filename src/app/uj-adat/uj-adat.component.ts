import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { Nepesseg } from '../nepesseg';
import { Router } from '@angular/router';

@Component({
  selector: 'app-uj-adat',
  templateUrl: './uj-adat.component.html',
  styleUrls: ['./uj-adat.component.css']
})
export class UjAdatComponent {
  ujMeres:any={};
  oszlopok =[
    "evszam","magyar","nemet","szlovak","egyeb"
  ]
  currentDate = new Date()
  constructor(private base:BaseService, private router:Router)
  {
    this.ujMeres.evszam=this.currentDate.getFullYear();
  }

  create(){
    console.log(this.ujMeres);
    this.base.fscreate(this.ujMeres);
    this.router.navigate(['/adatok']);
  }
}

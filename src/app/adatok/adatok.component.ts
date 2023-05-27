import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-adatok',
  templateUrl: './adatok.component.html',
  styleUrls: ['./adatok.component.css']
})
export class AdatokComponent {
  oszlopok =[
    "evszam","magyar","nemet","szlovak","egyeb"
  ]
  adatok:any;
  showError=false;
  errorMessage="";

  constructor(private base:BaseService){
    this.base.get().snapshotChanges().pipe(
            map(changes=> 
              changes
              .map(c=> ({key:c.payload.key, ...c.payload.val()})))

    ).subscribe(
      {
        next:(adat)=>{
          this.showError=false;
          this.adatok=adat
        },
        error:(e)=>{
          this.showError=true;
          this.errorMessage=e;
        }
      }
    )
  }
}

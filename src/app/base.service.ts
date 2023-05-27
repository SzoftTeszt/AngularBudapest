import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Nepesseg } from './nepesseg';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  refNepesseg: AngularFireList<Nepesseg>
  constructor(private db:AngularFireDatabase) {
    this.refNepesseg=db.list("/budapest")
   }
   get(){
    return this.refNepesseg;
   }

   create(body:any){
    this.refNepesseg.push(body);
   }
}

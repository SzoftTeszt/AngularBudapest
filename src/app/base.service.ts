import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Nepesseg } from './nepesseg';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  refNepesseg: AngularFireList<Nepesseg>

  fsrefNepesseg: AngularFirestoreCollection<Nepesseg>

  constructor(private db:AngularFireDatabase,
             private fsdb: AngularFirestore) {
    this.refNepesseg=db.list("/budapest");

    this.fsrefNepesseg= fsdb.collection('/budapest')
   }
   get(){
    return this.refNepesseg;
   }
   

   create(body:any){
    this.refNepesseg.push(body);
   }
   fsget(){
    return this.fsrefNepesseg;
   }
   
   fscreate(body:any){
    this.fsrefNepesseg.add({...body});
   }

   fsupdate(id: string, data:any){
    return this.fsrefNepesseg.doc(id).update(data);
   }

   fsdelete(id:string){
    return this.fsrefNepesseg.doc(id).delete();
   }
}

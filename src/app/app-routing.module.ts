import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdatokComponent } from './adatok/adatok.component';
import { UjAdatComponent } from './uj-adat/uj-adat.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'adatok',component:AdatokComponent},
  {path:'ujadat',component:UjAdatComponent},
  {path:'**',redirectTo:''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

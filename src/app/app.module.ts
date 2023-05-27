import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import {  AngularFireModule } from '@angular/fire/compat';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { AdatokComponent } from './adatok/adatok.component';
import { UjAdatComponent } from './uj-adat/uj-adat.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { enviroment } from 'src/enviroments';
import { FormsModule } from '@angular/forms';
import { OrderByYearPipe } from './order-by-year.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    AdatokComponent,
    UjAdatComponent,
    OrderByYearPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,    
    AngularFireModule.initializeApp(enviroment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

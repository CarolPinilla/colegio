import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header.component';

//rutas

import { APP_ROUTING } from './app.routes';
import { AlumnoComponent } from './components/Alumnos/alumno.component';
import { BodyComponent } from './components/template/body.component';

import { HttpModule } from '@angular/http';
import { FormsModule } from "@angular/forms";

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { AlumnoService } from './Services/alumnos.services';
import { ProfesorComponent } from './components/Profesores/profesor.component';
  
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AlumnoComponent,
    ProfesorComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    APP_ROUTING
  ],
  providers: [
    AlumnoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

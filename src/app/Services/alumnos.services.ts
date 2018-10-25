import { Injectable } from '@angular/core';
import { Alumno } from '../models/alumno.interface';


@Injectable()
export class AlumnoService {
    
    alumno: Alumno[];

    constructor() {
        this.cargarStorage();
    
    }

getAlumno(){
    if(localStorage.getItem('data') === null) {
        this.alumno = [];
      } else {
        this.alumno = JSON.parse(localStorage.getItem('data'));
      }
      return this.alumno;
}



addAlumno(alumno:Alumno){
    this.alumno.push(alumno);
    this.guardarStorage();
}

guardarStorage(){
    localStorage.setItem('data', JSON.stringify(this.alumno))
  }

  cargarStorage(){
      if(localStorage.getItem('data')){
        this.alumno = JSON.parse(localStorage.getItem('data'));
      }else{
          this.alumno = [];
      }
  }

}
import { Injectable } from '@angular/core';
import { Alumno } from '../models/alumno.interface';
import { AlumnoComponent } from '../components/Alumnos/alumno.component';


@Injectable()
export class AlumnoService {
    
    alumno: Alumno[];

    constructor() {
        this.cargarStorage();
    
    }

getAlumno(){
    if(localStorage.getItem('dataAlumno') === null) {
        this.alumno = [];
      } else {
        this.alumno = JSON.parse(localStorage.getItem('dataAlumno'));
      }
      return this.alumno;
}



addAlumno(alumno:Alumno){
    console.log(alumno);
    this.alumno.push(alumno);
    this.guardarStorage();
}

guardarStorage(){
    localStorage.setItem('dataAlumno', JSON.stringify(this.alumno))
  }

  cargarStorage(){
      if(localStorage.getItem('dataAlumno')){
        this.alumno = JSON.parse(localStorage.getItem('dataAlumno'));
      }else{
          this.alumno = [];
      }
  }
}
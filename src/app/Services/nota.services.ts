import { Injectable } from '@angular/core';


@Injectable()
export class NotaService {
    
  

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
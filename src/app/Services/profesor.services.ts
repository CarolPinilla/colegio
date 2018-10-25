import { Injectable } from '@angular/core';
import { Profesor } from '../models/profesor.interface';


@Injectable()
export class ProfesorService {
    
    profesor: Profesor[];

    constructor() {
        this.cargarStorage();
    
    }

getProfesor(){
    if(localStorage.getItem('dataProfesor') === null) {
        this.profesor = [];
      } else {
        this.profesor = JSON.parse(localStorage.getItem('dataProfesor'));
      }
      return this.profesor;
}



addProfesor(profesor:Profesor){
    this.profesor.push(profesor);
    this.guardarStorage();
}

guardarStorage(){
    localStorage.setItem('dataProfesor', JSON.stringify(this.profesor))
  }

  cargarStorage(){
      if(localStorage.getItem('dataProfesor')){
        this.profesor = JSON.parse(localStorage.getItem('dataProfesor'));
      }else{
          this.profesor = [];
      }
  }

  deleteProfesor(profesor: Profesor) {
    for (let i = 0; i < this.profesor.length; i++) {
      if (profesor == this.profesor[i]) {
        this.profesor.splice(i, 1);
        localStorage.setItem('dataProfesor', JSON.stringify(this.profesor));
      }
    }
  }

}
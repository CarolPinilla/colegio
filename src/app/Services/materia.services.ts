import { Injectable } from '@angular/core';
import { Materia } from '../models/materia.interface';


@Injectable()
export class MateriaService {
    
    materia: Materia[];

    constructor() {
        this.cargarStorage();
    
    }

getMateria(){
    if(localStorage.getItem('dataMateria') === null) {
        this.materia = [];
      } else {
        this.materia = JSON.parse(localStorage.getItem('dataMateria'));
      }
      return this.materia;
}



addMateria(materia:Materia){
    this.materia.push(materia);
    this.guardarStorage();
}

guardarStorage(){
    localStorage.setItem('dataMateria', JSON.stringify(this.materia))
  }

  cargarStorage(){
      if(localStorage.getItem('dataMateria')){
        this.materia = JSON.parse(localStorage.getItem('dataMateria'));
      }else{
          this.materia = [];
      }
  }

}
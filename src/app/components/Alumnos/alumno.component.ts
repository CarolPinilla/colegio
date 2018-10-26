import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AlumnoService } from '../../Services/alumnos.services';
import { Alumno } from '../../models/alumno.interface';
import { MateriaService } from '../../Services/materia.services';
import { MateriaComponent } from '../Materias/materia.component';
import { Materia } from '../../models/materia.interface';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {

  nombre: string;
  nombres:string;
  apellido: string;
  edad: number;
  
  alumno: Alumno[];
  materia: Materia[];
  alumno2: Alumno[];
  index;

  constructor(private alumnoService: AlumnoService,
              private materiaService: MateriaService) { }

  ngOnInit() {
    this.alumno2 = this.alumnoService.getAlumno();
    this.alumno = this.alumnoService.getAlumno();
    this.materia = this.materiaService.getMateria();
    
  }

  AddAlumno(newNombre: HTMLInputElement, newApellido: HTMLInputElement, newEdad: HTMLInputElement) {
    this.nombres = newNombre.value;

    this.alumnoService.addAlumno({
      nombre: newNombre.value,
      apellido: newApellido.value,
      edad: newEdad.valueAsNumber,
      materia:[]
    });

    newNombre.value = '';
    newApellido.value = '';
    newEdad.valueAsNumber = null;
    this.ngOnInit();
    
  }

  SelectAlumno(alumno, i) {
    this.alumno2 = alumno;
    this.index = i;

  }

  UpdateAlumno(updateNombre: HTMLInputElement, updateApellido: HTMLInputElement, updateEdad: HTMLInputElement) {
    this.alumno[this.index].nombre = updateNombre.value;
    this.alumno[this.index].apellido = updateApellido.value;
    this.alumno[this.index].edad = updateEdad.valueAsNumber;
    this.alumnoService.guardarStorage();
    this.ngOnInit();
  }

  AsignarMateria(ma) {
    console.log(ma);
    this.alumno[this.index].materia.push(ma);
    this.alumnoService.guardarStorage();
    alert("Materia " + ma + " asignada");
  }


}




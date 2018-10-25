import { Component, OnInit } from '@angular/core';
import { AlumnoService } from '../../Services/alumnos.services';
import { Alumno } from '../../models/alumno.interface';


@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {

  nombre: string;
  apellido: string;
  edad: number;
  
  alumno: Alumno[];
  alumno2: Alumno[];
  index;

  constructor(private alumnoService: AlumnoService) { }

  ngOnInit() {
    this.alumno = this.alumnoService.getAlumno();
  }

  AddAlumno(newNombre: HTMLInputElement, newApellido: HTMLInputElement, newEdad: HTMLInputElement) {
    this.alumnoService.addAlumno({
      nombre: newNombre.value,
      apellido: newApellido.value,
      edad: newEdad.valueAsNumber,

    });

    newNombre.value = '';
    newApellido.value = '';
    newEdad.valueAsNumber = null;
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
  }



}




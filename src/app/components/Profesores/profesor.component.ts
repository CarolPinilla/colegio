import { Component, OnInit } from '@angular/core';
import { AlumnoService } from '../../Services/alumnos.services';
import { Alumno } from '../../models/alumno.interface'


@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.css']
})
export class ProfesorComponent implements OnInit {

  nombre: string;
  apellido: string;
  edad: number;
  alumno: Alumno[];

  constructor(private alumnoService: AlumnoService) { }

  ngOnInit() {
    this.alumno = this.alumnoService.getAlumno();
  }

  AddAlumno(newNombre: HTMLInputElement, newApellido: HTMLInputElement, newEdad: HTMLInputElement) {
    console.log("AddAlumno");
    this.alumnoService.addAlumno({
      nombre: newNombre.value,
      apellido: newApellido.value,
      edad: newEdad.valueAsNumber
    });

    newNombre.value = '';
    newApellido.value = '';
    newEdad.valueAsNumber = null;
  }


}




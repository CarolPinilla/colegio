import { Component, OnInit } from '@angular/core';
import { ProfesorService } from '../../Services/profesor.services';
import { Profesor } from '../../models/profesor.interface';


@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.css']
})
export class ProfesorComponent implements OnInit {

  nombre: string;
  apellido: string;
  edad: number;
  profesor: Profesor[];

  constructor(private profesorService: ProfesorService) { }

  ngOnInit() {
    this.profesor = this.profesorService.getProfesor();
  }

  AddProfesor(newNombre: HTMLInputElement, newApellido: HTMLInputElement, newEdad: HTMLInputElement) {
    console.log("AddAlumno");
    this.profesorService.addProfesor({
      nombre: newNombre.value,
      apellido: newApellido.value,
      edad: newEdad.valueAsNumber
    });

    newNombre.value = '';
    newApellido.value = '';
    newEdad.valueAsNumber = null;
  }

  deleteProfesor(profesor: Profesor) {
    if(confirm('¿Esta seguro de eliminar el profesor?')) {
      this.profesorService.deleteProfesor(profesor);
  }


}
}




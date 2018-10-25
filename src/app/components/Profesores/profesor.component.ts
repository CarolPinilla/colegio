import { Component, OnInit } from '@angular/core';
import { ProfesorService } from '../../Services/profesor.services';
import { Profesor } from '../../models/profesor.interface';
import { MateriaService } from '../../Services/materia.services';
import { Materia } from '../../models/materia.interface';
import { MateriaComponent } from '../Materias/materia.component';


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
  profesor2: Profesor[];
  materia: Materia[];
  index;

  constructor(private profesorService: ProfesorService,
    private materiaService: MateriaService) { }

  ngOnInit() {
    this.profesor = this.profesorService.getProfesor();
    this.materia = this.materiaService.getMateria();
  }

  AddProfesor(newNombre: HTMLInputElement, newApellido: HTMLInputElement, newEdad: HTMLInputElement) {
    console.log("AddAlumno");
    this.profesorService.addProfesor({
      nombre: newNombre.value,
      apellido: newApellido.value,
      edad: newEdad.valueAsNumber,
      materia: []
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

  SelectProfesor(profesor, i) {
    this.profesor2 = profesor;
    this.index = i;

  }


  AsignarMateria(materia) {
    console.log("entre aqui");
    this.profesor[this.index].materia.push(materia);
    this.profesorService.guardarStorage();
    alert("Materia " +materia + " asignada");
  }



}




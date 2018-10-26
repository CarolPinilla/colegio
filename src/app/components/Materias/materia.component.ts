import { Component, OnInit } from '@angular/core';
import { MateriaService } from '../../Services/materia.services';
import { Materia } from '../../models/materia.interface';


@Component({
  selector: 'app-materia',
  templateUrl: './materia.component.html',
  styleUrls: ['./materia.component.css']
})
export class MateriaComponent implements OnInit {

  titulo: string;
  materia: Materia[];

  constructor(public materiaService: MateriaService) { }

  ngOnInit() {
    this.materia = this.materiaService.getMateria();
  }

  AddMateria(newTitulo: HTMLInputElement) {
    this.materiaService.addMateria({
      titulo: newTitulo.value
    });

    newTitulo.value = '';
    this.ngOnInit();
  }


}




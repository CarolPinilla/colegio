import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-nota',
    templateUrl: './nota.component.html'
})
export class NotaComponent implements OnInit {




    constructor() { }

    ngOnInit() {
       
    }

    AddMateria(newTitulo: HTMLInputElement) {
        this.materiaService.addMateria({
            titulo: newTitulo.value
        });

        newTitulo.value = '';
    }


}




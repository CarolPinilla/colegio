import { Alumno } from "./alumno.interface";
import { Profesor } from "./profesor.interface";
import { Materia } from "./materia.interface";

export interface Nota {
    alumno: Alumno;
    profesor: Profesor;
    materia: Materia;
    nota: number;
    periodo: string;
}
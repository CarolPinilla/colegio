import { Alumno } from "./alumno.interface";
import { Profesor } from "./profesor.interface";
import { Materia } from "./materia.interface";

export interface Nota {
    alumno: Alumno;
    nota1: number;
    nota2: number;
}
import { Materia } from "./materia.interface";

export interface Alumno {
    nombre: string;
    apellido: string;
    edad: number;
    materia: Materia[];
}


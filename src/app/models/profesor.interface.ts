import { Materia } from "./materia.interface";

export interface Profesor {
    nombre:string;
    apellido: string;
    edad: number;
    materia: Materia[];
}
import { RouterModule, Routes } from '@angular/router';
import { AlumnoComponent } from './components/Alumnos/alumno.component';
import { BodyComponent } from './components/template/body.component';




const APP_ROUTES: Routes = [
  { path: 'Inicio', component: BodyComponent },
  { path: 'alumnos', component: AlumnoComponent },
  { path: 'profesor', component: AlumnoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'Inicio' }
];

export const  APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});

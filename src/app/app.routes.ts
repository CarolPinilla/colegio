import { RouterModule, Routes } from '@angular/router';
import { AlumnoComponent } from './components/Alumnos/alumno.component';




const APP_ROUTES: Routes = [
  //{ path: 'home', component: HomeComponent },
  { path: 'alumnos', component: AlumnoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'alumnos' }
];

export const  APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});

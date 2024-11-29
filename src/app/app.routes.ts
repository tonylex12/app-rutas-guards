import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './dashboard/home/home.component';
import { CursolistaComponent } from './dashboard/curso/cursolista/cursolista.component';
import { AlumnolistaComponent } from './dashboard/alumno/alumnolista/alumnolista.component';
import { AlumnodetalleComponent } from './dashboard/alumno/alumnodetalle/alumnodetalle.component';
import { CursodetalleComponent } from './dashboard/curso/cursodetalle/cursodetalle.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EjemploAngularMaterialComponent } from './ejemplo-angular-material/ejemplo-angular-material.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  { path: 'angular-material', component: EjemploAngularMaterialComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard],
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'curso', component: CursolistaComponent },
      { path: 'alumno', component: AlumnolistaComponent },
      { path: 'alumno/:id', component: AlumnodetalleComponent },
      { path: 'curso/:id', component: CursodetalleComponent },
    ],
  },

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

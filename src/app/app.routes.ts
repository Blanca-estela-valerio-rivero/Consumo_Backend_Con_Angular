import { Routes } from '@angular/router';
import { DashboardPageComponent } from './features/dashboard/pages/dashboard-page.component';
import { AlumnosPageComponent } from './features/alumnos/pages/alumnos-page.component';
import { MateriasPageComponent } from './features/materias/pages/materias-page.component';
import { SemestresPageComponent } from './features/semestres/pages/semestres-page.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardPageComponent,
    data: { title: 'Dashboard' }
  },
  {
    path: 'alumnos',
    component: AlumnosPageComponent,
    data: { title: 'Gestión de Alumnos' }
  },
  {
    path: 'materias',
    component: MateriasPageComponent,
    data: { title: 'Gestión de Materias' }
  },
  {
    path: 'semestres',
    component: SemestresPageComponent,
    data: { title: 'Gestión de Semestres' }
  }
];

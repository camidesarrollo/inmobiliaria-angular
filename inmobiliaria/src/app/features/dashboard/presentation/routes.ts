import { Routes } from '@angular/router';
import { authGuard } from '@core/auth/guards/auth.guard';

export const DASHBOARD_ROUTES: Routes = [
  { path: 'administrar', canActivate: [authGuard], loadComponent: () => import('./pages/administracion/administracion.component').then(m => m.AdministracionComponent) },
];

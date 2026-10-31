import { Routes } from '@angular/router';

// Portada, dentro de SiteLayout
export const HOME_ROUTES: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent), pathMatch: 'full' },
];

// Páginas institucionales, dentro de MainLayout
export const ABOUT_ROUTES: Routes = [
  { path: 'nosotros', loadComponent: () => import('./pages/nosotros/nosotros.component').then(m => m.NosotrosComponent) },
];

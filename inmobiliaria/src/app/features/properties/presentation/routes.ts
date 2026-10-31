import { Routes } from '@angular/router';

export const PROPERTIES_ROUTES: Routes = [
  { path: 'anuncios', loadComponent: () => import('./pages/anuncios/anuncios.component').then(m => m.AnunciosComponent) },
  { path: 'anuncio/:id', loadComponent: () => import('./pages/anuncio/anuncio.component').then(m => m.AnuncioComponent) },
];

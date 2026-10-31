import { Routes } from '@angular/router';

export const CONTACT_ROUTES: Routes = [
  { path: 'contacto', loadComponent: () => import('./pages/contacto/contacto.component').then(m => m.ContactoComponent) },
];

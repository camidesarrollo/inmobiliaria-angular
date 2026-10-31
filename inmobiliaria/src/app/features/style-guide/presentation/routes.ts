import { Routes } from '@angular/router';

export const STYLE_GUIDE_ROUTES: Routes = [
  { path: 'estilos', loadComponent: () => import('./pages/style-guide/style-guide.component').then(m => m.StyleGuideComponent) },
];

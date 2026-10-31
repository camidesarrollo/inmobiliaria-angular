import { Routes } from '@angular/router';

export const BLOG_ROUTES: Routes = [
  { path: 'blog', loadComponent: () => import('./pages/blog/blog.component').then(m => m.BlogComponent) },
];

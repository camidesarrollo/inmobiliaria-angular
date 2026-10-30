import { Routes } from '@angular/router';
import { authGuard } from './Servicios/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./Componentes/_layout/site-layout/site-layout.component').then(m => m.SiteLayoutComponent),
    children: [
      { path: '', loadComponent: () => import('./Componentes/PagesExternas/home/home.component').then(m => m.HomeComponent), pathMatch: 'full' },
    ]
  },
  // Las rutas internas usan canActivate: [authGuard] cuando requieren sesión
  {
    path: '',
    loadComponent: () => import('./Componentes/_layout/app-layout/app-layout.component').then(m => m.AppLayoutComponent),
    children: [
      { path: 'nosotros', loadComponent: () => import('./Componentes/PagesInternas/nosotros/nosotros.component').then(m => m.NosotrosComponent) },
      { path: 'blog', loadComponent: () => import('./Componentes/PagesInternas/blog/blog.component').then(m => m.BlogComponent) },
      { path: 'anuncios', loadComponent: () => import('./Componentes/PagesInternas/anuncios/anuncios.component').then(m => m.AnunciosComponent) },
      { path: 'contacto', loadComponent: () => import('./Componentes/PagesInternas/contacto/contacto.component').then(m => m.ContactoComponent) },
      { path: 'anuncio/:id', loadComponent: () => import('./Componentes/PagesInternas/anuncio/anuncio.component').then(m => m.AnuncioComponent) },
      { path: 'administrar', canActivate: [authGuard], loadComponent: () => import('./Componentes/PagesInternas/administracion/administracion.component').then(m => m.AdministracionComponent) }
    ]
  },
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import('./Componentes/PagesInternas/auth/auth.routes').then(m => m.AUTH_ROUTES) },
];

export default routes;

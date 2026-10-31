import { Routes } from '@angular/router';
import { HOME_ROUTES, ABOUT_ROUTES } from '@features/home/presentation/routes';
import { BLOG_ROUTES } from '@features/blog/presentation/routes';
import { PROPERTIES_ROUTES } from '@features/properties/presentation/routes';
import { CONTACT_ROUTES } from '@features/contact/presentation/routes';
import { DASHBOARD_ROUTES } from '@features/dashboard/presentation/routes';
import { STYLE_GUIDE_ROUTES } from '@features/style-guide/presentation/routes';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('@layout/site-layout/site-layout.component').then(m => m.SiteLayoutComponent),
    children: [...HOME_ROUTES]
  },
  // Las rutas internas usan canActivate: [authGuard] cuando requieren sesión
  {
    path: '',
    loadComponent: () => import('@layout/main-layout/main-layout.component').then(m => m.MainLayoutComponent),
    children: [
      ...ABOUT_ROUTES,
      ...BLOG_ROUTES,
      ...PROPERTIES_ROUTES,
      ...CONTACT_ROUTES,
      ...DASHBOARD_ROUTES,
    ]
  },
  ...STYLE_GUIDE_ROUTES,
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import('@features/auth/presentation/routes').then(m => m.AUTH_ROUTES) },
];

export default routes;

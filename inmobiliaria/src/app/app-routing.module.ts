import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthModule} from './Componentes/PagesInternas/auth/auth.module';
import {AnuncioComponent} from './Componentes/PagesInternas/anuncio/anuncio.component'
import {SiteLayoutComponent} from './Componentes/_layout/site-layout/site-layout.component';
import {HomeComponent} from './Componentes/PagesExternas/home/home.component';
import {NosotrosComponent} from './Componentes/PagesInternas/nosotros/nosotros.component';
import { AppLayoutComponent } from './Componentes/_layout/app-layout/app-layout.component';
import {BlogComponent} from './Componentes/PagesInternas/blog/blog.component';
import {AnunciosComponent} from './Componentes/PagesInternas/anuncios/anuncios.component';
import {ContactoComponent} from './Componentes/PagesInternas/contacto/contacto.component';
import {AuthGuard} from './Servicios/auth.guard';
import {AdministracionComponent} from './Componentes/PagesInternas/administracion/administracion.component';
const routes: Routes = [
  { 
    path: '', 
    component: SiteLayoutComponent,
    children: [
      { path: '', component: HomeComponent, pathMatch: 'full'},
      
    ]
  },
  // App routes goes here here canActivate: [AuthGuard] para validar token
  { 
    path: '',
    component: AppLayoutComponent, 
    children: [
      { path: 'nosotros', component: NosotrosComponent},
      {path: 'blog', component: BlogComponent},
      {path: 'anuncios', component: AnunciosComponent},
      {path: 'contacto', component: ContactoComponent},
      {path: 'anuncio/:id', component: AnuncioComponent},
      {path: 'administrar', component:AdministracionComponent}
    ]
},
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: 'auth', loadChildren: './Componentes/PagesInternas/auth/auth.module#AuthModule' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
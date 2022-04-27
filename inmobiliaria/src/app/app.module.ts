import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';

import { DataTablesModule } from 'angular-datatables';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AppLayoutComponent} from './Componentes/_layout/app-layout/app-layout.component';
import {HeaderComponent} from './Componentes/_layout/header/header.component';
import {NavComponent} from './Componentes/_layout/nav/nav.component';
import {SiteLayoutComponent} from './Componentes/_layout/site-layout/site-layout.component';
import {FooterComponent} from './Componentes/_layout/footer/footer.component';
import {MobileNavComponent} from './Componentes/_layout/mobile-nav/mobile-nav.component';
import {LoginComponent} from './Componentes/PagesInternas/auth/login/login.component';
import {RegisterComponent} from './Componentes/PagesInternas/auth/register/register.component';
import {BlogComponent} from './Componentes/PagesInternas/blog/blog.component';
import {HomeComponent} from './Componentes/PagesExternas/home/home.component';
import {IndexContactoComponent} from './Componentes/PagesExternas/index-contacto/index-contacto.component';
import {IndexBlogComponent} from './Componentes/PagesExternas/index-blog/index-blog.component';
import {IndexNosotrosComponent} from './Componentes/PagesExternas/index-nosotros/index-nosotros.component';
import {IndexTestimonialesComponent} from './Componentes/PagesExternas/index-testimoniales/index-testimoniales.component';
import {IndexAnuncioComponent} from './Componentes/PagesExternas/index-anuncio/index-anuncio.component';
import { NosotrosComponent } from './Componentes/PagesInternas/nosotros/nosotros.component';
import { HeaderInternaComponent } from './Componentes/_layout/header-interna/header-interna.component';
import { AnunciosComponent } from './Componentes/PagesInternas/anuncios/anuncios.component';
import { ContactoComponent } from './Componentes/PagesInternas/contacto/contacto.component';
import { AnuncioComponent } from './Componentes/PagesInternas/anuncio/anuncio.component';
import { EntradaComponent } from './Componentes/PagesInternas/entrada/entrada.component';

import {AuthGuard} from './Servicios/auth.guard';
import {TokenInterceptorService} from './Servicios/token-interceptor.service';
import { AdministracionComponent } from './Componentes/PagesInternas/administracion/administracion.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatExpansionModule} from '@angular/material/expansion';
import { AdministracionBlogComponent } from './Componentes/PagesInternas/administracion-blog/administracion-blog.component';
import { AdministracionPropiedadesComponent } from './Componentes/PagesInternas/administracion-propiedades/administracion-propiedades.component';
import { AdministracionPeticionesComponent } from './Componentes/PagesInternas/administracion-peticiones/administracion-peticiones.component';
import { AdministracionUsuarioComponent } from './Componentes/PagesInternas/administracion-usuario/administracion-usuario.component';

import {MatSelectModule} from '@angular/material/select';

import {MatNativeDateModule} from '@angular/material/core';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';


@NgModule({
  declarations: [
    AppComponent,
    AppLayoutComponent,
    HeaderComponent,
    NavComponent,
    SiteLayoutComponent,
    FooterComponent,
    MobileNavComponent,
    BlogComponent,
    HomeComponent,
    IndexBlogComponent,
    IndexContactoComponent,
    IndexNosotrosComponent,
    IndexTestimonialesComponent,
    IndexAnuncioComponent,
    NosotrosComponent,
    HeaderInternaComponent,
    AnunciosComponent,
    ContactoComponent,
    AnuncioComponent,
    EntradaComponent,
    AdministracionComponent,
    AdministracionBlogComponent,
    AdministracionPropiedadesComponent,
    AdministracionPeticionesComponent,
    AdministracionUsuarioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    DataTablesModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatExpansionModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    
  ],

  providers: [
    AuthGuard,
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Propiedades } from '../../../Model/propiedades';
import {PropiedadesService} from '../../../Servicios/propiedades.service';

import { RouterLink } from '@angular/router';



@Component({
    selector: 'app-anuncios',
    templateUrl: './anuncios.component.html',
    styleUrls: ['./anuncios.component.css'],
    providers: [PropiedadesService],
    imports: [RouterLink],
})
export class AnunciosComponent implements OnDestroy, OnInit {
  propiedadesService = inject(PropiedadesService);

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
    this.getPropiedades();
  }
  getPropiedades() {
    this.propiedadesService.getPropiedades().subscribe((res: Propiedades[]) => {
      this.propiedadesService.propiedades = res;
      console.log( this.propiedadesService.propiedades);
    });
  }
}

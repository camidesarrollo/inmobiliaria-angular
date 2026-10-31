import { Component, OnInit, inject } from '@angular/core';
import { Propiedades } from '../../../domain/models/propiedades.model';
import {PropiedadesService} from '../../../application/services/propiedades.service';

import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-index-anuncio',
    templateUrl: './index-anuncio.component.html',
    styleUrls: ['./index-anuncio.component.css'],
    imports: [RouterLink],
})
export class IndexAnuncioComponent implements OnInit {
  propiedadesService = inject(PropiedadesService);

  propiedades: Propiedades[];

  ngOnInit(): void {
    this.getPropiedades(); 
  }
  getPropiedades() {
    this.propiedadesService.getPropiedades().subscribe((res: Propiedades[]) => {
      this.propiedadesService.propiedades = res.filter(item => item.valor < 80864719);
    });
  }

}

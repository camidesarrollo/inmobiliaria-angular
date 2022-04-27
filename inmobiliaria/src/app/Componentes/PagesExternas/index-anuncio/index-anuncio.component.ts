import { Component, OnInit } from '@angular/core';
import { Propiedades } from 'src/app/Model/propiedades';
import {PropiedadesService} from '../../../Servicios/propiedades.service';

@Component({
  selector: 'app-index-anuncio',
  templateUrl: './index-anuncio.component.html',
  styleUrls: ['./index-anuncio.component.css'],
})
export class IndexAnuncioComponent implements OnInit {
  propiedades: Propiedades[];
  constructor(public propiedadesService: PropiedadesService) { }

  ngOnInit(): void {
    this.getPropiedades(); 
  }
  getPropiedades() {
    this.propiedadesService.getPropiedades().subscribe((res: Propiedades[]) => {
      this.propiedadesService.propiedades = res.filter(item => item.valor < 80864719);
    });
  }

}

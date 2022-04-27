import { Component,OnDestroy, OnInit } from '@angular/core';
import { Propiedades } from 'src/app/Model/propiedades';
import {PropiedadesService} from '../../../Servicios/propiedades.service';



@Component({
  selector: 'app-anuncios',
  templateUrl: './anuncios.component.html',
  styleUrls: ['./anuncios.component.css'],
  providers: [PropiedadesService],
})
export class AnunciosComponent implements OnDestroy, OnInit {


  constructor(public propiedadesService: PropiedadesService) { }
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

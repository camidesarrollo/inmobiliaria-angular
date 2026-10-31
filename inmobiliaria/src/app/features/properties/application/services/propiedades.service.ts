import { Injectable, inject } from '@angular/core';
import {Propiedades} from '../../domain/models/propiedades.model';
import {PropiedadesRepository} from '../../domain/repositories/propiedades.repository';
@Injectable({
  providedIn: 'root'
})
export class PropiedadesService {
  private repository = inject(PropiedadesRepository);


  selectedPropiedades: Propiedades;
  propiedades: Propiedades[];

  constructor() {
    this.selectedPropiedades = new Propiedades();
  }
  postPropiedad(propiedades: Propiedades) {
    return this.repository.create(propiedades);
  }
  getPropiedades() {
    return this.repository.getAll();
  }

  getPropiedad(propiedad: Propiedades){
    return this.repository.getById(propiedad._id);
  }

  putPropiedades(propiedad: Propiedades) {
    return this.repository.update(propiedad);
  }

  deletePropiedad(_id: string) {
    return this.repository.delete(_id);
  }
}

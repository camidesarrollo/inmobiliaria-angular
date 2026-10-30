import { Injectable, inject } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Propiedades} from '../Model/propiedades';
@Injectable({
  providedIn: 'root'
})
export class PropiedadesService {
  private httpClient = inject(HttpClient);


  selectedPropiedades: Propiedades;
  propiedades: Propiedades[];
  
  readonly URL_API = "http://localhost:3000/api/propiedades";
  
  constructor() { 
    this.selectedPropiedades = new Propiedades();
  }
  postPropiedad(propiedades: Propiedades) {
    return this.httpClient.post(this.URL_API, propiedades);
  }
  getPropiedades() {
    return this.httpClient.get<Propiedades[]>(this.URL_API);
  }

  getPropiedad(propiedad: Propiedades){
    return this.httpClient.get<Propiedades>(this.URL_API +`/${propiedad._id}`);
  }

  putPropiedades(propiedad: Propiedades) {
    return this.httpClient.put(this.URL_API + `/${propiedad._id}`, propiedad);
  }

  deletePropiedad(_id: string) {
    return this.httpClient.delete(this.URL_API + `/${_id}`);
  }
}

import { Injectable, inject } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_ENDPOINTS} from '@core/config/api.config';
import {Contacto} from '../../domain/models/contacto.model';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  private httpClient = inject(HttpClient);

  selectedContacto: Contacto;
  contactos: Contacto[];
  readonly URL_API = API_ENDPOINTS.contacto;
  
  constructor() { 
    this.selectedContacto = new Contacto ();
  }
  postPropiedad(contacto:Contacto) {
    return this.httpClient.post(this.URL_API, contacto);
  }
}

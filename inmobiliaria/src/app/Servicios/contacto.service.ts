import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Contacto} from '../Model/contacto';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  selectedContacto: Contacto;
  contactos: Contacto[];
  readonly URL_API = "http://localhost:3000/api/contacto";
  
  constructor(private httpClient: HttpClient) { 
    this.selectedContacto = new Contacto ();
  }
  postPropiedad(contacto:Contacto) {
    return this.httpClient.post(this.URL_API, contacto);
  }
}

import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_ENDPOINTS } from '@core/config/api.config';
import { Contacto, ContactoCreado } from '../../domain/models/contacto.model';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  private httpClient = inject(HttpClient);

  readonly URL_API = API_ENDPOINTS.contacto;

  enviar(contacto: Contacto): Observable<ContactoCreado> {
    return this.httpClient.post<ContactoCreado>(this.URL_API, contacto);
  }
}

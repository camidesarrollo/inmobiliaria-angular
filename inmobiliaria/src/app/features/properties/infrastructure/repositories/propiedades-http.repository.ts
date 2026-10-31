import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { API_ENDPOINTS } from '@core/config/api.config';
import { handleApiError } from '@core/http/api-error.handler';
import { Propiedades } from '../../domain/models/propiedades.model';
import { PropiedadesRepository } from '../../domain/repositories/propiedades.repository';

@Injectable()
export class PropiedadesHttpRepository extends PropiedadesRepository {
  private httpClient = inject(HttpClient);
  private readonly url = API_ENDPOINTS.propiedades;

  getAll(): Observable<Propiedades[]> {
    return this.httpClient.get<Propiedades[]>(this.url).pipe(catchError(handleApiError));
  }

  getById(id: string): Observable<Propiedades> {
    return this.httpClient.get<Propiedades>(`${this.url}/${id}`).pipe(catchError(handleApiError));
  }

  create(propiedad: Propiedades): Observable<unknown> {
    return this.httpClient.post(this.url, propiedad).pipe(catchError(handleApiError));
  }

  update(propiedad: Propiedades): Observable<unknown> {
    return this.httpClient.put(`${this.url}/${propiedad._id}`, propiedad).pipe(catchError(handleApiError));
  }

  delete(id: string): Observable<unknown> {
    return this.httpClient.delete(`${this.url}/${id}`).pipe(catchError(handleApiError));
  }
}

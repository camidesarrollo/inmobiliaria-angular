import { Injectable, inject } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_ENDPOINTS} from '@core/config/api.config';
import {Auth} from '../../domain/models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private httpClient = inject(HttpClient);

  usuarios: Auth[];

  getUsuarios() {
    return this.httpClient.get<Auth[]>(API_ENDPOINTS.usuarios);
  }
}

import { Injectable, inject } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_ENDPOINTS} from '@core/config/api.config';
import {Entrada} from '../../domain/models/entrada.model';
@Injectable({
  providedIn: 'root'
})
export class EntradaService {
  private httpClient = inject(HttpClient);

  selectedEntrada: Entrada;
  Entradas: Entrada[];
  readonly URL_API = API_ENDPOINTS.entradas;
}

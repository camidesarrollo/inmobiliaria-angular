import { Injectable, inject } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Entrada} from '../Model/entrada';
@Injectable({
  providedIn: 'root'
})
export class EntradaService {
  private httpClient = inject(HttpClient);

  selectedEntrada: Entrada;
  Entradas: Entrada[];
  readonly URL_API = "http://localhost:3000/api/entradas";
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Entrada} from '../Model/entrada';
@Injectable({
  providedIn: 'root'
})
export class EntradaService {
  selectedEntrada: Entrada;
  Entradas: Entrada[];
  readonly URL_API = "http://localhost:3000/api/entradas";
  constructor(private httpClient: HttpClient) { 
  }
}

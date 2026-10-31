import { Observable } from 'rxjs';
import { Propiedades } from '../models/propiedades.model';

// Contrato del dominio: la capa de aplicación depende de esto, no de HttpClient
export abstract class PropiedadesRepository {
  abstract getAll(): Observable<Propiedades[]>;
  abstract getById(id: string): Observable<Propiedades>;
  abstract create(propiedad: Propiedades): Observable<unknown>;
  abstract update(propiedad: Propiedades): Observable<unknown>;
  abstract delete(id: string): Observable<unknown>;
}

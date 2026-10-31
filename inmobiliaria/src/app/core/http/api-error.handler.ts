import { HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

// Punto único para registrar errores de la API; reenvía el error para que cada pantalla decida qué mostrar
export function handleApiError(error: HttpErrorResponse): Observable<never> {
  console.error(`Error ${error.status} en ${error.url ?? 'la API'}:`, error.message);
  return throwError(() => error);
}

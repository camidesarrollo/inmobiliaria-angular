import { Provider } from '@angular/core';

import { PropiedadesRepository } from './domain/repositories/propiedades.repository';
import { PropiedadesHttpRepository } from './infrastructure/repositories/propiedades-http.repository';

// Une el contrato del dominio con su implementación HTTP
export function provideProperties(): Provider[] {
  return [{ provide: PropiedadesRepository, useClass: PropiedadesHttpRepository }];
}

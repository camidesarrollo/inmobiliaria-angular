import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { PropiedadesService } from './propiedades.service';
import { provideProperties } from '@features/properties/properties.providers';

describe('PropiedadesService', () => {
  let service: PropiedadesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideProperties(), provideHttpClient(), provideHttpClientTesting()]
    });
    service = TestBed.inject(PropiedadesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

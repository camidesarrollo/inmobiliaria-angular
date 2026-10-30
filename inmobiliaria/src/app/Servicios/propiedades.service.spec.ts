import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { PropiedadesService } from './propiedades.service';

describe('PropiedadesService', () => {
  let service: PropiedadesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()]
    });
    service = TestBed.inject(PropiedadesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

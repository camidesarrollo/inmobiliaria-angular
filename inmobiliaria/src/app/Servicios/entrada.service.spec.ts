import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { EntradaService } from './entrada.service';

describe('EntradaService', () => {
  let service: EntradaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()]
    });
    service = TestBed.inject(EntradaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

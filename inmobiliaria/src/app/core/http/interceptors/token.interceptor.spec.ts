import { TestBed } from '@angular/core/testing';
import { HttpClient, provideHttpClient, withInterceptors } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

import { tokenInterceptor } from './token.interceptor';

describe('tokenInterceptor', () => {
  let http: HttpClient;
  let httpTesting: HttpTestingController;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({
      providers: [provideHttpClient(withInterceptors([tokenInterceptor])), provideHttpClientTesting()]
    });
    http = TestBed.inject(HttpClient);
    httpTesting = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTesting.verify();
    localStorage.clear();
  });

  it('agrega el header Authorization cuando hay token', () => {
    localStorage.setItem('ACCESS_TOKEN', 'abc123');
    http.get('/api/propiedades').subscribe();
    const req = httpTesting.expectOne('/api/propiedades');
    expect(req.request.headers.get('Authorization')).toBe('Bearer abc123');
    req.flush([]);
  });

  it('no agrega el header cuando no hay token', () => {
    http.get('/api/propiedades').subscribe();
    const req = httpTesting.expectOne('/api/propiedades');
    expect(req.request.headers.has('Authorization')).toBe(false);
    req.flush([]);
  });
});

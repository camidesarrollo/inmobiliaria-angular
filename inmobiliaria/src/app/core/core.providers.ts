import { EnvironmentProviders, Provider } from '@angular/core';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

import { tokenInterceptor } from './http/interceptors/token.interceptor';

export function provideCore(): (Provider | EnvironmentProviders)[] {
  return [
    provideHttpClient(withInterceptors([tokenInterceptor])),
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ];
}

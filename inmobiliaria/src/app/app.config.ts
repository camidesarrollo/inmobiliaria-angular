import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import routes from './app.routes';
import { provideCore } from '@core/core.providers';
import { provideProperties } from '@features/properties/properties.providers';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideCore(),
    provideProperties(),
  ]
};

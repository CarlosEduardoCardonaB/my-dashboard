import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { HttpClient, provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withViewTransitions({
        skipInitialTransition: true,

      })
    ),
    provideHttpClient(),
    //Ya no se trabaja de esta forma el httpClient, se trabaja como aqui arriba
    // importProvidersFrom(
        //HttpClient
    // )
  ]
};

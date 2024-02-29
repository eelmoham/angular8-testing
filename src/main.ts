import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// import { bootstrapAppLocation } from '@angular/platform-browser';
import { provideRoutes } from '@angular/router';

if (environment.production) {
  enableProdMode();
}

// bootstrapAppLocation('app-root', provideRoutes([])).then(() => {});

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

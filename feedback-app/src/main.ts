import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}


// Step2: Every ng App should be bootstrapped with a Module -- AppModule
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

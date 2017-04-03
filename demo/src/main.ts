// Polyfills
import './polyfills.ts';
// NG2
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
// APP
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';

if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);

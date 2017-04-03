// NG2
import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
// Vendor
import 'rxjs/add/operator/filter';

declare const ga: any;

/**
 * Simple Google Analytics service. Note that all its methods don't do anything unless the app
 * is deployed on ng-library-starter.github.io. This avoids sending events and page views during development.
 */
@Injectable()
export class Analytics {
    private _enabled: boolean;

    public constructor(private location: Location, private router: Router) {
        this._enabled = window.location.href.indexOf('angular-library-starter') >= 0;
    }

    /**
     * Intended to be called only once. Subscribes to router events and sends a page view
     * after each ended navigation event.
     */
    public trackPageViews(): void {
        if (!this._enabled) {
            return;
        }
        this.router.events
            .filter((event: any) => event instanceof NavigationEnd)
            .subscribe(() => {
                if (typeof ga !== 'undefined') {
                    ga('send', { hitType: 'pageview', page: this.location.path() });
                }
            });
    }

    /**
     * Sends an event.
     */
    public trackEvent(action: string, category: string): void {
        if (!this._enabled) {
            return;
        }
        if (typeof ga !== 'undefined') {
            ga('send', { hitType: 'event', eventCategory: category, eventAction: action });
        }
    }
}

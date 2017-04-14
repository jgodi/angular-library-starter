// NG2
import { AfterContentInit, Component, Inject } from '@angular/core';
import { NavigationEnd, Router, ActivatedRoute } from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';
// Vendor
import { PageScrollConfig, PageScrollService, PageScrollInstance } from 'ng2-page-scroll';
// APP
import { Analytics } from './shared/analytics/analytics';

PageScrollConfig.defaultDuration = 11;
PageScrollConfig.defaultScrollOffset = 70;

@Component({
    selector: 'app-demo',
    templateUrl: './app.component.html',
    providers: [
        Analytics
    ]
})
export class AppComponent implements AfterContentInit {

    public constructor(private route: ActivatedRoute, private router: Router, private pageScrollService: PageScrollService,
        @Inject(DOCUMENT) private document: any, private analytics: Analytics) {
    }

    public ngAfterContentInit(): any {
        // setup analytics page views
        this.analytics.trackPageViews();

        const getUrl = (router: Router) => router.routerState.snapshot.url.slice(0, router.routerState.snapshot.url.indexOf('#'));
        let _prev = getUrl(this.router);
        const justDoIt = (event: any): void => {
            if (!(event instanceof NavigationEnd)) {
                return;
            }

            const _cur = getUrl(this.router);
            if (typeof PR !== 'undefined' && _prev !== _cur) {
                _prev = _cur;
                // google code-prettify
                PR.prettyPrint();
            }

            const hash = this.route.snapshot.fragment;
            if (hash) {
                const pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleDirectionInstance(this.document, `#${hash}`, true);
                this.pageScrollService.start(pageScrollInstance);
            }
        };

        this.router.events.subscribe((event: any) => setTimeout(() => justDoIt(event), 50));
    }
}

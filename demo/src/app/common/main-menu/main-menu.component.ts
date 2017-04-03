// NG2
import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
// APP
import { routes } from '../../app.routing';

@Component({
    selector: 'main-menu',
    templateUrl: './main-menu.component.html'
})
export class MainMenuComponent {
    public routes: any = routes;
    public search: any = {};
    public hash = '';

    public constructor(private router: Router) {
        this.routes = this.routes.filter((v: any) => v.path !== '**');
        this.router.events.subscribe((event: any) => {
            if (event instanceof NavigationEnd) {
                this.hash = event.url;
            }
        });
    }
}

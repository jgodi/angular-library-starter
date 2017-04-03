// NG2
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// Vendor
import { Ng2PageScrollModule } from 'ng2-page-scroll/ng2-page-scroll';
// APP
import { AppComponent } from './app.component';
import { routes } from './app.routing';
import { GettingStartedComponent } from './getting-started/getting-started.component';
import { MainMenuComponent } from './common/main-menu/main-menu.component';
import { TopMenuComponent } from './common/top-menu/top-menu.component';
import { SearchFilterPipe } from './common/main-menu/search-filter.pipe';

@NgModule({
    declarations: [
        AppComponent,
        GettingStartedComponent,
        MainMenuComponent,
        TopMenuComponent,
        SearchFilterPipe
    ],
    imports: [
        // NG2
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(routes, { useHash: true }),
        // Vendor
        Ng2PageScrollModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

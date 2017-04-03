// NG2
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// APP
import { MeowModule } from 'ng-starter-library/meow';
import { SharedModule } from '../../shared';
import { MeowDemoComponent } from './meow.component';
import { DEMO_COMPONENTS } from './demos';
import { routes } from './demo-meow.routes';

@NgModule({
    declarations: [
        MeowDemoComponent,
        ...DEMO_COMPONENTS
    ],
    imports: [
        // NG2
        CommonModule,
        FormsModule,
        SharedModule,
        RouterModule.forChild(routes),
        // APP
        MeowModule.forRoot()
    ],
    exports: [MeowDemoComponent]
})
export class DemoMeowModule {
    public static routes: any = routes;
}

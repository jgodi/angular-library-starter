// NG2
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// APP
import { DemoSectionComponent } from './demo-section/demo-section.component';
import { SampleBoxComponent } from './sample-box/sample-box.component';
import { Analytics } from './analytics/analytics';

@NgModule({
    declarations: [
        DemoSectionComponent,
        SampleBoxComponent
    ],
    imports: [
        // NG2
        CommonModule,
        RouterModule
    ],
    exports: [
        DemoSectionComponent,
        SampleBoxComponent,
        RouterModule
    ],
    providers: [
        Analytics
    ]
})
export class SharedModule {
}

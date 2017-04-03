// NG2
import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
// APP
import { MeowComponent } from './meow.component';

@NgModule({
    imports: [CommonModule],
    declarations: [MeowComponent],
    exports: [MeowComponent],
    entryComponents: [MeowComponent]
})
export class MeowModule {
    public static forRoot(): ModuleWithProviders {
        return { ngModule: MeowModule, providers: [] };
    }
}

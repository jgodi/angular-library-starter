// NG2
import { ModuleWithProviders, NgModule } from '@angular/core';
// APP
import { MeowModule } from './meow/meow.module';

const MODULES = [
    MeowModule
];

@NgModule({
    imports: [
        MeowModule.forRoot()
    ],
    exports: MODULES
})
export class NgLibraryStarterRootModule {
}

@NgModule({ exports: MODULES })
export class NgLibraryStarterModule {
    public static forRoot(): ModuleWithProviders {
        return { ngModule: NgLibraryStarterRootModule };
    }
}

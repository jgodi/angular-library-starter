/* tslint:disable: max-classes-per-file */
// NG2
import { ModuleWithProviders, NgModule } from '@angular/core';
// APP
import { MeowModule } from './meow/meow.module';

// Export ALL the things!!

export {
    MeowComponent, MeowModule
} from './meow';

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

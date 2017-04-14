# Documenting full steps to install and test with [angular-seed](https://github.com/mgechev/angular-seed)

```bash
npm install --save ng-library-starter
```

### In **project.config.ts**

```
//uncomment this
import { ExtendPackages } from './seed.config.interfaces';

// *towards the bottom, replace extended packages with this:

let additionalPackages: ExtendPackages[] = [
// required for dev build
{
name:'ng-library-starter',
path:'node_modules/angular-library-starter/bundles/angular-library-starter.umd.min.js'
},

// required for prod build
{
name:'ng-library-starter/*',
path:'node_modules/angular-library-starter/bundles/angular-library-starter.umd.min.js'
},

// mandatory dependency for ng-library-starter datepicker
{
name:'moment',
path:'node_modules/moment',
packageMeta:{
    main: 'moment.js',
    defaultExtension: 'js'
}
}
];
this.addPackagesBundles(additionalPackages);
```


## Verify by adding an alert to the home module and html:

### In **home.module.ts:**

```
import { MeowModule } from 'ng-library-starter/meow';

@NgModule({
imports: [CommonModule, HomeRoutingModule, SharedModule, MeowModule.forRoot()],
declarations: [HomeComponent],
exports: [HomeComponent],
providers: [NameListService]
})
```

### In **home.component.html:**

```
<meow></meow>
```
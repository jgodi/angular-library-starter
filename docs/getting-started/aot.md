### How to use ng-library-starter in Angular with AoT compilation using ngc and rollup

The compilation process is described on the official Angular website here: https://angular.io/docs/ts/latest/cookbook/aot-compiler.html

#### 1) Install `ng-library-starter`

```bash
npm install ng-library-starter --save
```

#### 2) Edit Angular module

Open the module file where you want to include ng-library-starter (most probably `app.module.ts`) and import either specific ng-library-starter modules by listing them in the import statement and then in the import array of the Angular module

```typescript
import { MeowModule } from 'ng-library-starter/meow';
...

@NgModule({
   ...
   imports: [MeowModule.forRoot(), ... ],
   ...
})
```

 **NOT RECOMMENDED**: or use NgLibraryStarterModule to import all of the modules at once:

```typescript
import { NgLibraryStarterModule } from 'ng-library-starter';
...

@NgModule({
   ...
   imports: [NgLibraryStarterModule.forRoot(), ... ],
   ...
})
```

#### 3) Edit rollup configuration (rollup-config.js)

You have to use CommonJS rollup plugin, which you should be using anyway due to RxJS. If for some reason not, install it:

```bash
npm install rollup-plugin-commonjs --save --dev
```

Then you have to import the CommonJS plugin, include it in the plugins array and add ng-library-starter to the list of modules:

```javascript
...
import commonjs from 'rollup-plugin-commonjs';
...

//paths are relative to the execution path
export default {
	...
	plugins: [
		...
		commonjs({
			include: [
				'node_modules/rxjs/**',
				'node_modules/ng-library-starter/**'
			]
		}),
		...
	]
}
```

#### 4) Run compilation the standard way

e.g.

```bash
ngc -p tsconfig-aot.json
rollup -c rollup-config.js
```
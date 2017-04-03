```typescript
// RECOMMENDED (doesn't work with system.js)
import { MeowModule } from 'ng-library-starter/meow';
// or
import { MeowModule } from 'ng-library-starter';

@NgModule({
  imports: [MeowModule.forRoot(),...]
})
export class AppModule(){}
```


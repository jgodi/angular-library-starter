import { GettingStartedComponent } from './getting-started/getting-started.component';

export const routes = [
    {
        path: '',
        data: ['Getting Started'],
        component: GettingStartedComponent
    },
    {
        path: 'meow',
        data: ['Meow'],
        loadChildren: './components/+meow/demo-meow.module#DemoMeowModule'
    },
    {
        path: '**',
        redirectTo: '/'
    }
];

import { MeowBasicComponent } from './basic/basic';

export const DEMO_COMPONENTS = [
    MeowBasicComponent
];

export const DEMOS = {
    basic: {
        component: require('!!raw-loader?lang=typescript!./basic/basic'),
        html: require('!!raw-loader?lang=markup!./basic/basic.html')
    }
};

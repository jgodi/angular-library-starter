// NG2
import { Component } from '@angular/core';
// APP
import { DEMOS } from './demos';

// webpack html imports
const titleDoc = require('html-loader!markdown-loader!./docs/usage.md');

@Component({
    selector: 'meow-demo',
    template: `
        <demo-section [name]="name" [src]="src">
            <p>Displays pictures of cats...</p>

            <h2>Contents</h2>
            <ul>
                <li>
                    <a routerLink="." fragment="usage">Usage</a>
                </li>
                <li>
                    <a routerLink="." fragment="examples">Examples</a>
                    <ul>
                        <li>
                            <a routerLink="." fragment="simple">Simple</a>
                        </li>
                    </ul>
                </li>
            </ul>

            <h2 routerLink="." fragment="usage" id="usage">Usage</h2>

            <p [innerHtml]="titleDoc"></p>

            <h2 routerLink="." fragment="examples" id="examples">Examples</h2>

            <p>See ALL the kitties!</p>

            <h2 routerLink="." fragment="simple" id="simple">Simple Meow</h2>

            <ng-sample-box [ts]="demos.basic.component" [html]="demos.basic.html">
                <demo-meow-basic></demo-meow-basic>
            </ng-sample-box>
        </demo-section>
`
})
export class MeowDemoComponent {
    public name = 'Meow';
    public src = 'https://github.com/jgodi/ng-library-starter/tree/master/src/meow';
    public titleDoc: string = titleDoc;
    public demos: any = DEMOS;
}

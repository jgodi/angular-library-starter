import { Component } from '@angular/core';

const doc = require('html-loader!markdown-loader!./getting-started.md');

@Component({
    selector: 'getting-started',
    templateUrl: './getting-started.template.html'
})
export class GettingStartedComponent {
    public name = `Custom components for Angular`;
    public doc: string = doc;
}

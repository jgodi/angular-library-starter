import { browser, $ } from 'protractor';

export class NgLibraryStarterPage {
    public navigateTo(): any {
        return browser.get('/');
    }

    public getTitle(): any {
        return $('#top-menu>.title>h2').getText();
    }
}

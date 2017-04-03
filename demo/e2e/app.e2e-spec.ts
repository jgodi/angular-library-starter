import { NgLibraryStarterPage } from './app.po';

describe('ng-starter-library demo', function (): any {
    let page: NgLibraryStarterPage;

    beforeEach(() => {
        page = new NgLibraryStarterPage();
    });

    it('should have the correct title', () => {
        page.navigateTo();
        expect(page.getTitle()).toEqual('ng-library-starter');
    });
});

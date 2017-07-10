import { NgMainAppKrkPage } from './app.po';

describe('ng-main-app-krk App', () => {
  let page: NgMainAppKrkPage;

  beforeEach(() => {
    page = new NgMainAppKrkPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

import { NavigationDemoPage } from './app.po';

describe('navigation-demo App', () => {
  let page: NavigationDemoPage;

  beforeEach(() => {
    page = new NavigationDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

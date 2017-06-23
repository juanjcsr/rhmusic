import { Ng2rhmusicPage } from './app.po';

describe('ng2rhmusic App', () => {
  let page: Ng2rhmusicPage;

  beforeEach(() => {
    page = new Ng2rhmusicPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

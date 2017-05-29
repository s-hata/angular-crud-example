import { CrudExamplePage } from './app.po';

describe('crud-example App', () => {
  let page: CrudExamplePage;

  beforeEach(() => {
    page = new CrudExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

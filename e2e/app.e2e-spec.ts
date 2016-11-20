import { LeavingYoutFootprintPage } from './app.po';

describe('leaving-yout-footprint App', function() {
  let page: LeavingYoutFootprintPage;

  beforeEach(() => {
    page = new LeavingYoutFootprintPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

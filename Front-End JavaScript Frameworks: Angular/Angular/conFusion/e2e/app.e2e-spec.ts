import { AppPage } from './app.po';

import { browser } from 'protractor';

describe('con-fusion App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should enter a new comment for the first dish', () => {
    page.navigateTo('/dishdetail/0');

    let newAuthor = page.getElement('input[type=text]');
    newAuthor.sendKeys('Test Author');

    let newComment = page.getElement('textarea');
    newComment.sendKeys('Test Comment');

    let newSubmitButton = page.getElement("button[type=submit]");
    newSubmitButton.click();

    browser.pause();
  });
});

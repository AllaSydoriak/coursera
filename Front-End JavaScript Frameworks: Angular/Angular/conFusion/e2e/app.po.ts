import { browser, by, element } from 'protractor';

export class AppPage {
etElement(selector: string) {
    return element(by.css(selector));
  }

  getAllElements(selector: string) {
    return element.all(by.css(selector));
  }
}

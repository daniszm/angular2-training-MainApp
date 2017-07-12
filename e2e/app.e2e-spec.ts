import {browser, By, element} from "protractor";
describe('items view', () => {

  const btnLogIn = element(By.buttonText('log in'));
  const btnAddItem = element(By.buttonText('add item'));
  const addItemForm = element(By.css('form.modal-add'));

  beforeAll(() => {
      browser.get('/');
      expect(btnLogIn.isPresent()).toBeTruthy();
      btnLogIn.click();
      expect(btnLogIn.isPresent()).toBeFalsy();
  });

  beforeEach(() => {
      browser.get('/items')
  })

  it('should display items', () => {
      browser.get('/items');
      browser.sleep(10000);
  })

  it('should display add item form', () => {
    btnAddItem.click();
    expect(addItemForm.isPresent()).toBeTruthy();
  })

  it('should add new item', () => {

    const uniqueName = "Danisz " + Date.now();

    btnAddItem.click();
    const titleField = addItemForm.element(By.css('input[name=title]'));
    const priceField = addItemForm.element(By.css('input[name=price]'));
    const descField = addItemForm.element(By.css('textarea'));
    const categorySelect = addItemForm.element(By.css('select'));
    const categoryField = categorySelect.element(By.cssContainingText('option', 'food')).click();
    const btnSendForm = addItemForm.element(By.buttonText('send item'));

    const searchByTitle = element(By.css('app-search input[ng-reflect-name=title'))

    titleField.sendKeys(uniqueName);
    priceField.sendKeys('1234');
    descField.sendKeys('cccc sdfa');
    browser.sleep(5000);

    btnSendForm.click();

    searchByTitle.sendKeys(uniqueName);

    browser.sleep(5000);

  })

})

import { expect } from '@playwright/test';

class HomePage {
  constructor(page) {
    this.page = page;
    this.elementsMenu = page.getByText('Elements', {exact: true});
    this.formsMenu = page.getByText('Forms', {exact: true });
    this.widgetsMenu = page.getByText('Widgets', {exact: true });
    this.alertFrameWindowsOptions = page.getByText('Alerts, Frame & Windows', {exact: true });
    this.practiceForm = page.getByText('Practice Form', {exact: true});
    this.interactionsMenu = page.getByText('Interactions', {exact: true});
  }

  async homePageGoTo() {
    await this.page.goto('https://demoqa.com/');
  }

  async acessarFormsMenu() {
    await this.formsMenu.click();

    await expect(this.practiceForm).toBeVisible();
  }

  async acessarAlertsMenu(){
    await this.alertFrameWindowsOptions.click();
  }

  async acessarWidgetsMenu(){
    await this.widgetsMenu.click();
  }
  async acessarElements(){
    await this.elementsMenu.click();
  }
  async acessarInterectations(){
    await this.interactionsMenu.click();
  }
}

export { HomePage };

import { expect } from '@playwright/test';

class AlertsFramesWindows {
  constructor(page) {
    this.page = page;
    this.browserWindowsOption = page.getByText('Browser Windows', {exact: true});
    this.newWindowButton = page.locator('#windowButton');
  }

    async acessarBrowserWindows() {
        await this.browserWindowsOption.click();
    }

    async abrirNovaJanela() {
    const novaJanelaPromise = this.page.context().waitForEvent('page');
        await this.newWindowButton.click();

    const novaJanela = await novaJanelaPromise;

    await novaJanela.waitForLoadState();

    await expect(novaJanela).toHaveURL('https://demoqa.com/sample');

    return novaJanela;
  }

  async fecharNovaJanela(novaJanela) {
    await novaJanela.close();
  }
}

export { AlertsFramesWindows };

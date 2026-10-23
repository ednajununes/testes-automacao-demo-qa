import { expect } from '@playwright/test';

class Widgets {
    constructor(page) {
        this.page = page;
        this.subMenuProgressBar = page.getByText('Progress Bar', {exact: true });
        this.progressBar = page.locator('#progressBar'); 
        this.progressValue = page.locator('[aria-valuenow]');
        this.startButton = page.locator('#startStopButton'); 
        this.resetButton = page.locator('#resetButton'); 
  }

    async acessarSubMenuProgressBar(){
        await this.subMenuProgressBar.click();
  }
    async obterValorProgresso() {
        return Number(await this.progressValue.getAttribute('aria-valuenow'));
    }
    async pararAntesDe25() {
        await this.startButton.click();

        while (true) {
        const valor = await this.obterValorProgresso();
        if (valor >= 24) {
            await this.startButton.click();
            break;
        }}

        const valorFinal = Number(
        await this.progressBar.getAttribute('aria-valuenow'));

        console.log(`Progresso final: ${valorFinal}%`);
        expect(valorFinal).toBeLessThan(25);
    }

    async verificarProgressoIgualA100() {
        await this.startButton.click();
        await expect(this.progressValue).toHaveAttribute('aria-valuenow', '100', { timeout: 15000 });
        await expect(this.resetButton).toBeVisible();
        await this.resetButton.click();
        await expect(this.startButton).toBeVisible();
    }
}

export { Widgets };

import { test, expect } from '@playwright/test';
import { AlertsFramesWindows } from '../pages/AlertsFramesWindows.js';
import { HomePage } from '../pages/HomePage.js';


test('Abrir e fechar nova janela no menu Alerts Frames e Windows', async ({ page }) => {
    const homePage = new HomePage(page);
    const alertsFramesWindows = new AlertsFramesWindows(page);
    await homePage.homePageGoTo();
    await homePage.acessarAlertsMenu();
    await alertsFramesWindows.acessarBrowserWindows();

    const novaJanela = await alertsFramesWindows.abrirNovaJanela();
    await expect(novaJanela).toHaveURL('https://demoqa.com/sample');
    await alertsFramesWindows.fecharNovaJanela(novaJanela);
});

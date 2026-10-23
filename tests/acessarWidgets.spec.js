import { test } from '@playwright/test';
import { Widgets } from '../pages/Widgets.js';
import { HomePage } from '../pages/HomePage.js';

test('Verificar se a barra de progresso é menor que 25%', async ({ page }) => {
const widgets = new Widgets(page);
const homePage = new HomePage(page);
    await homePage.homePageGoTo();
    await homePage.acessarWidgetsMenu();
    await widgets.acessarSubMenuProgressBar();
    await widgets.pararAntesDe25();
    await widgets.verificarProgressoIgualA100();
});

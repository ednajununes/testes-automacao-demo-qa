
import { test } from '@playwright/test';
import { Elements } from '../pages/Elements.js';
import { HomePage } from '../pages/HomePage.js';

test('Criar, editar e deletar registro em Web Tables', async ({ page }) => {
    const elements = new Elements(page);
    const homePage = new HomePage(page);
    await homePage.homePageGoTo();
    await homePage.acessarElements();
    await elements.acessarWebTables();

    await elements.criarRegistro({
        nome: 'Maria Teste',
        sobrenome: 'Silva',
        email: 'maria.teste@example.com',
        idade: 28,
        salario: 5000,
        departamento: 'TI'
    });

    await elements.editarRegistro('maria.teste@example.com', {
        nome: 'Maria Teste',
        sobrenome: 'Editado',
        email: 'maria.editada@example.com',
        idade: 29,
        salario: 6000,
        departamento: 'Quality Assurance'
    });

  await elements.deletarRegistro('maria.editada@example.com');
});

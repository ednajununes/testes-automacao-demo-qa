import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage.js';
import { Forms } from '../pages/Forms.js';

test('Preencher e enviar o formulário do menu Practice Form', async ({ page }) => {
  const homePage = new HomePage(page);
  const forms = new Forms(page);

  await homePage.homePageGoTo();
  await homePage.acessarFormsMenu();
  await forms.acessarPraticeForm();

  await forms.preencherForm({
    nome: 'Maria',
    sobrenome: 'Silva',
    email: 'maria@example.com',
    telefone: '84987654321',
    dataNascimento: '15 Oct 2000',
    disciplina: 'Maths',
    endereco: 'Rua A, 123'
  });

  await forms.anexarArquivo();
  await forms.selecionarEstadoECidade('NCR', 'Delhi');
  await forms.enviarForm();

  await forms.validarPopup();
  await forms.fecharPopup();
});

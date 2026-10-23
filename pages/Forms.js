import path from 'node:path';
import { expect } from '@playwright/test';

class Forms {
  constructor(page) {
    this.page = page;

    this.practiceForm = page.getByText('Practice Form', {exact: true});

    this.form = page.locator('#userForm');

    this.firstName = page.locator('#firstName');
    this.lastName = page.locator('#lastName');
    this.userEmail = page.locator('#userEmail');
    this.femaleGender = page.locator('#gender-radio-2');
    this.userNumber = page.locator('#userNumber');
    this.dataAniversario = page.locator('#dateOfBirthInput');
    this.subjects = page.locator('#subjectsInput');

    this.sportHobbies = page.locator('#hobbies-checkbox-1');
    this.readingHobbies = page.locator('#hobbies-checkbox-2');
    this.musicHobbies = page.locator('#hobbies-checkbox-3');

    this.currentAddress = page.locator('#currentAddress');

    this.selectState = page.locator('#stateCity-wrapper');
    this.selectCity = page.locator('#city');

    this.submitButton = page.locator('#submit');
    this.fileButton = page.locator('#uploadPicture');

    this.popup = page.locator('.modal-content');
    this.closePopup = page.locator('#closeLargeModal');
  }

  async acessarPraticeForm() {
    await this.practiceForm.click();
    await expect(this.form).toBeVisible();
  }

  async anexarArquivo() {
  const arquivo = path.resolve(process.cwd(), 'TesteArquivo.txt');
  console.log('Caminho do arquivo:', arquivo);
  await this.fileButton.setInputFiles(arquivo);
  console.log('Arquivo anexado com sucesso!');
  }

  async preencherForm(dados) {
    await this.firstName.fill(dados.nome);
    await this.lastName.fill(dados.sobrenome);
    await this.userEmail.fill(dados.email);

    await this.femaleGender.check({ force: true });

    await this.userNumber.fill(dados.telefone);

    await this.subjects.fill(dados.disciplina);
    await this.subjects.press('Enter');

    await this.sportHobbies.check({ force: true });
    await this.readingHobbies.check({ force: true });
    await this.musicHobbies.check({ force: true });

    await this.currentAddress.fill(dados.endereco);
    await this.dataAniversario.fill(dados.dataNascimento);
    await this.page.waitForTimeout(3000)
  }

  async selecionarEstadoECidade(estado, cidade) {
    await this.selectState.click();
    await this.page.getByText(estado, {exact: true}).last().click();
    await this.selectCity.click();
    await this.page.getByText(cidade, {exact: true}).last().click();
  }

  async enviarForm() {
    await this.submitButton.click();
  }

  async validarPopup() {
    await expect(this.popup).toBeVisible();
  }

  async fecharPopup() {
    await this.closePopup.click();
  }
}

export { Forms };

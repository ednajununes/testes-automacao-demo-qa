import path from 'node:path';
import { expect } from '@playwright/test';

class Elements {
    constructor(page) {
        this.page = page;
        this.webTablesMenu = page.getByText('Web Tables', {exact: true}); 
        this.addButton = page.locator('#addNewRecordButton')
        this.firstName = page.locator('#firstName');
        this.lastName = page.locator('#lastName');
        this.userEmail = page.locator('#userEmail');
        
        this.userAge = page.locator('#age');
        this.userSalary = page.locator('#salary');
        this.userDepartment = page.locator('#department'); 
        this.submitButton = page.locator('#submit');
        this.search = page.locator('#searchBox'); 
        this.editUser = page.locator('#edit-record-1');
        this.deleteUser = page.locator('#delete-record-1');
    }
    async criarRegistro(dados) {
        await this.addButton.click();

        await this.firstName.fill(dados.nome);
        await this.lastName.fill(dados.sobrenome);
        await this.userEmail.fill(dados.email);
        await this.userAge.fill(String(dados.idade));
        await this.userSalary.fill(String(dados.salario));
        await this.userDepartment.fill(dados.departamento);

        await this.submitButton.click();
        await expect(
        this.page.getByRole('row').filter({ hasText: dados.email })).toBeVisible();
    }

    async acessarWebTables(){
        await this.webTablesMenu.click();
        await expect(this.addButton).toBeVisible();
    }

    async editarRegistro(email, novosDados) {
        const linha = this.page.getByRole('row').filter({hasText: email});

        await expect(linha).toBeVisible();
        await this.editUser.click();

        await this.firstName.fill(novosDados.nome);
        await this.lastName.fill(novosDados.sobrenome);
        await this.userEmail.fill(novosDados.email);
        await this.userAge.fill(String(novosDados.idade));
        await this.userSalary.fill(String(novosDados.salario));
        await this.userDepartment.fill(novosDados.departamento);

        await this.submitButton.click();

        await expect(
        this.page.getByRole('row').filter({ hasText: novosDados.email })).toBeVisible();
    }
    async deletarRegistro() {
        //await this.search.click();
        await this.search.fill('Editado');
        await expect(this.page.getByText('1 of 1')).toBeVisible();
        await this.deleteUser.click();

        await expect(this.page.getByText('1 of 0')).toBeVisible();
    }
}

export { Elements };
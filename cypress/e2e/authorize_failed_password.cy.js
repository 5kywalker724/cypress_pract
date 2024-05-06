describe('Automize tests', () => {
  it('Провальный тест авторизации', () => {
    cy.fixture('student').then(data => {
        cy.log('Переход на страницу авторизации');
        cy.visit(data.main_url);

        cy.log('Ввод несуществующего логина');
        cy.get('.form-input--text').type(data.name);
        cy.wait(2000);

        cy.log('Ввод несуществующего пароля');
        cy.get('.form-input--password').type(data.incorrect_password);

        cy.log("Проверка что пользователь не авторизировался и пароль является некорректным");
        cy.get('.form-error > span').should('exist');
    });
});
});
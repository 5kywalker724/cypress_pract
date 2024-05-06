describe('Automize tests', () => {
  it('Провальный тест авторизации', () => {
    cy.fixture('student').then(data => {
        cy.log('Переход на страницу авторизации');
        cy.visit(data.main_url);

        cy.log('Ввод несуществующего логина');
        cy.get('.form-input--text').type(data.non_existed_name);
        cy.wait(2000);

        cy.log('Ввод несуществующего пароля');
        cy.get('.form-input--password').type(data.non_existed_password);

        cy.log('Клик по кнопке "Войти"');
        cy.get(':nth-child(3) > .button').click();

        cy.log("Проверка что пользователь не авторизировался");
        cy.get('.form-error > span').should('exist');
    });
});
});
describe('Automize tests', () => {
  it('Успешный тест авторизации', () => {
      cy.fixture('student').then(data => {
          cy.log('Переход на страницу авторизации');
          cy.visit(data.main_url);

          cy.log('Ввод существующего логина');
          cy.get('.form-input--text').type(data.name);
          cy.wait(2000);

          cy.log('Ввод существующего пароля');
          cy.get('.form-input--password').type(data.password);

          cy.log('Клик по кнопке "Войти"');
          cy.get(':nth-child(3) > .button').click();

          cy.log("Проверка что пользователь успешно авторизировался");
          cy.url().should('equal', 'https://dev.profteam.su/account/main');
      });
  });
});
describe('Automize tests', () => {
  it('Успешный тест регистрации', () => {
      cy.fixture('register').then(data => {
          cy.log('Переход на страницу регистрации');
          cy.visit(data.main_url);

          cy.log('Ввод корректного логина');
          cy.get(':nth-child(1) > :nth-child(1) >.form-control--medium > .form-input--text').type(data.name);

          cy.log('Ввод корректной почты');
          cy.get('.form-input--email').type(data.email);

          cy.log('Ввод корректного пароля');
          cy.get(':nth-child(3) > .form-control--medium .form-input--password').type(data.password);

          cy.log('Ввод корректного пароля для подтверждения');
          cy.get(':nth-child(4) > .form-control--medium .form-input--password').type(data.password_confirm);

          cy.log('Клик по кнопке "Войти"');
          cy.get(':nth-child(4) > .button').click();

          cy.log('Переход на другую страницу');
      });
  });
});
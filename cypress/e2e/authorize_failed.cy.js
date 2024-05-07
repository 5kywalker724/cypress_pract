describe('Automize tests', () => {
  it('Провальный тест авторизации', () => {
      cy.fixture('student').then(data => {
        cy.log('Переход на страницу авторизации');
        cy.visit(data.main_url);

        cy.log('Ввод несуществующего логина');
        cy.get('.form-input--text').type(data.non_existed_name);

        cy.log('Ввод несуществующего пароля');
        cy.get('.form-input--password').type(data.non_existed_password);

        cy.log('Клик по кнопке "Войти"');
        cy.get(':nth-child(3) > .button').click();

        cy.log("Проверка что пользователь не авторизировался");
        cy.get('.form-error > span').should('exist');
    });
  });
  it('Провальный тест авторизации c некорректным паролем', () => {
      cy.fixture('student').then(data => {
        cy.log('Переход на страницу авторизации');
        cy.visit(data.main_url);

        cy.log('Ввод несуществующего логина');
        cy.get('.form-input--text').type(data.name);

        cy.log('Ввод несуществующего пароля');
        cy.get('.form-input--password').type(data.incorrect_password);

        cy.log("Проверка что пользователь не авторизировался и пароль является некорректным");
        cy.get('.form-error > span').should('exist');
    });
  });
  // it('Провальный тест авторизации c некорректным логином', () => {
  //     cy.fixture('student').then(data => {
  //       cy.log('Переход на страницу авторизации');
  //       cy.visit(data.main_url);

  //       cy.log('Ввод несуществующего логина');
  //       cy.get('.form-input--text').type(data.incorrect_name);

  //       cy.log('Ввод несуществующего пароля');
  //       cy.get('.form-input--password').type(data.password);

  //       cy.log('Клик по кнопке "Войти"');
  //       cy.get(':nth-child(3) > .button').click();

  //       cy.log("Проверка что пользователь не авторизировался и логин является некорректным");
  //       cy.get('.form-error > span').should('exist');
  //   });
  // });
});
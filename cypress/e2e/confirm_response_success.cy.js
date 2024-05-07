describe('Создание вакансии', () => {
  it('Успешный отклик на вакансию', () => {
      cy.fixture('student').then(data => {
          cy.log('Переход на страницу авторизации');
          cy.visit(data.main_url);

          cy.log('Ввод существующего логина');
          cy.get('.form-input--text').type(data.name_employer);

          cy.log('Ввод существующего пароля');
          cy.get('.form-input--password').type(data.password_employer);

          cy.log('Клик по кнопке "Войти"');
          cy.get(':nth-child(3) > .button').click();

          cy.wait(1000);

          cy.log('Клик на вкладку "Отклики"');
          cy.get(':nth-child(5) > .menu-item__item-name').click();

          cy.log('Подтверждение отклика студента на вакансию');
          cy.get(':nth-child(1) > .responses-list-item__about > .responses-list-item__text > .responses-list-item__title').should('have.text', data.name_vacansy);
          cy.get(':nth-child(1) > .responses-list-item__actions > :nth-child(1)').click();

          cy.log('Выход из аккаунта для дальнейшего входа студента');
          cy.get('[data-v-7ff322b7=""][data-v-f5840952=""] > .button').click();

          cy.log('Переход на страницу авторизации');

          cy.log('Ввод существующего логина');
          cy.get('.form-input--text').type(data.name);

          cy.log('Ввод существующего пароля');
          cy.get('.form-input--password').type(data.password);

          cy.log('Клик по кнопке "Войти"');
          cy.get(':nth-child(3) > .button').click();

          cy.wait(1000);

          cy.log('Клик по вкладке "Отклики"');
          cy.get(':nth-child(4) > .menu-item__item-name').click();

          cy.log('Проверка что отклик является подтвержденным');
          cy.get(':nth-child(1) > .responses-list-item__content-company > .responses-list-item__company > .responses-list-item__title').should('have.text', data.name_vacansy);
          cy.get('.responses-list-item__content-company > .button').should('have.text', ' Рабочее пространство ');
      });
  });
});
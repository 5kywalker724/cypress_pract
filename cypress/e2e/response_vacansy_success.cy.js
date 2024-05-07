describe('Создание вакансии', () => {
  it('Успешный отклик на вакансию', () => {
      cy.fixture('student').then(data => {
          cy.log('Переход на страницу авторизации');
          cy.visit(data.main_url);

          cy.log('Ввод существующего логина');
          cy.get('.form-input--text').type(data.name);

          cy.log('Ввод существующего пароля');
          cy.get('.form-input--password').type(data.password);

          cy.log('Клик по кнопке "Войти"');
          cy.get(':nth-child(3) > .button').click();

          cy.wait(1000);

          cy.log('Переход на главную страницу');
          cy.get('.page > :nth-child(1) > [href="/"]').click();

          cy.log('Ввод в поиск существующего названия вакансии');
          cy.get('#input').type(data.name_vacansy);
          cy.get('.search-input__item').click();

          cy.log('Клик на кнопку "Откликнуться"');
          cy.get('.card-main__button-flag > .button').click()

          cy.log('Клик на иконку Личного кабинета');
          cy.get('a > .base-icon > svg').click();

          cy.log('Клик на вкладку "Отклики"');
          cy.get(':nth-child(4) > .menu-item__item-name').click();

          cy.log('Проверка соответствия названия отклика тому, на который пользователь откликнулся');
          cy.get(':nth-child(1) > .responses-list-item__content-company > .responses-list-item__company > .responses-list-item__title').should('exist', data.name_vacansy);
      });
  });
});
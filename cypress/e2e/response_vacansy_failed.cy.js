describe('Отклик на вакансию', () => {
  it('Провальный отклик на вакансию', () => {
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

          cy.log('Выход из аккаунта для дальнейшего входа работника');
          cy.get('[data-v-7ff322b7=""][data-v-f5840952=""] > .button').click();

          cy.log('Переход на страницу авторизации для работника');

          cy.log('Ввод существующего логина');
          cy.get('.form-input--text').type(data.name_employer);

          cy.log('Ввод существующего пароля');
          cy.get('.form-input--password').type(data.password_employer);

          cy.log('Клик по кнопке "Войти"');
          cy.get(':nth-child(3) > .button').click();

          cy.wait(1000);

          cy.log('Клик на вкладку "Вакансии"');
          cy.get(':nth-child(7) > .menu-item__item-name').click();

          cy.log('Клик на кнопку "Добавить в архив"');
          cy.get(':nth-child(1) > .vacancy-item__info-wrapper > .vacancy-header > .vacancy-header__name').should('exist', data.name_vacansy);
          cy.get(':nth-child(1) > .vacancy-item__info-wrapper > .vacancy-item__footer-wrapper > .vacancy-footer > .vacancy-footer__button-wrapper > .button__background-color-red')
          .click();
          cy.get('.desktop-modal__button-wrapper > .button__background-color-red').click();

          cy.log('Выход из аккаунта для дальнейшего входа cтудента');
          cy.get('[data-v-7ff322b7=""][data-v-f5840952=""] > .button').click();

          cy.log('Переход на страницу авторизации для работника');

          cy.log('Ввод существующего логина');
          cy.get('.form-input--text').type(data.name);

          cy.log('Ввод существующего пароля');
          cy.get('.form-input--password').type(data.password);

          cy.log('Клик по кнопке "Войти"');
          cy.get(':nth-child(3) > .button').click();

          cy.log('Клик на вкладку "Отклики"');
          cy.get(':nth-child(4) > .menu-item__item-name').click();

          cy.log('Проверка провального отклика на вакансию, что такого отклика нету');
          cy.get(':nth-child(1) > .responses-list-item__content-company > .responses-list-item__company > .responses-list-item__title').should('not.exist', data.name_vacansy);
      });
  });
});
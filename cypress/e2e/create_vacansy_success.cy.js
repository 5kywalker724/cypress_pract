describe('Создание вакансии', () => {
  it('Успешное создание вакансии', () => {
      cy.fixture('employer').then(data => {
          cy.log('Переход на страницу авторизации');
          cy.visit(data.main_url);

          cy.log('Ввод существующего логина');
          cy.get('.form-input--text').type(data.name);

          cy.log('Ввод существующего пароля');
          cy.get('.form-input--password').type(data.password);

          cy.log('Клик по кнопке "Войти"');
          cy.get(':nth-child(3) > .button').click();

          cy.log('Клик по кнопке "Вакансии"');
          cy.get(':nth-child(7) > .menu-item__item-name').click();

          cy.log('Клик по кнопке "Создать вакансию"');
          cy.get('[data-v-94414c9f=""][data-v-4849dea2=""] > .vacancies-block > .vacancies-block__filters-wrapper > .button').click();

          cy.log('Ввод необходимых данных для создания вакансии');
          cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(1) > .form-control--responsive > .form-input--')
          .type(data.name_vacansy, {force: true});
          cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(5) > .form-control > .form-area').type(data.requires_vacansy);
          cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(6) > .form-control > .form-area').type(data.duty_vacansy);

          cy.log('Клик по кнопке "Обновить вакансию"');
          cy.get('.vacancy-add-form-wrapper > .form > .form__buttons > .buttons > .button').click({force: true});


          cy.log('Проверка созданной вакансии');
          cy.get(':nth-child(1) > .vacancy-item__info-wrapper > .vacancy-item__footer-wrapper > .vacancy-footer > .vacancy-footer__button-wrapper > .button__background-color-blue')
          .click();
          cy.get('.card-main__header > .card-title').should('have.text', data.name_vacansy);
          cy.get(':nth-child(2) > div > ul > li').should('have.text', '· '+data.duty_vacansy);
          cy.get(':nth-child(4) > div > ul > li').should('have.text', '· '+data.requires_vacansy);
      });
  });
});
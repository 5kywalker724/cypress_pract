describe('Просмотр вакансий', () => {
  // it('Успешное просмотр вакансии c поиском', () => {
  //     cy.fixture('employer').then(data => {
  //         cy.log('Переход на главную страницу');
  //         cy.visit('https://dev.profteam.su/');

  //         cy.log('Клик по кнопке "Вакансии"');
  //         cy.get(':nth-child(1) > .header__nav > [href="/vacancies"]').click();

  //         cy.log('Ввод в поиск существующего названия вакансии');
  //         cy.get('.form-input--text').type(data.search_vacansy);

  //         cy.log('Клик по кнопке поиска');
  //         cy.get('div.search-input__field > .button').click()

  //         cy.wait(1000);

  //         cy.log('Проверка успешной работы поиска');
  //         cy.get('.vacancy-list__failed-loading').should('not.exist')
  //     });
  // });
  it('Успешное просмотр вакансии c фильтрами', () => {
    cy.fixture('employer').then(data => {
        cy.log('Переход на главную страницу');
        cy.visit('https://dev.profteam.su/');

        cy.log('Клик по кнопке "Вакансии"');
        cy.get(':nth-child(1) > .header__nav > [href="/vacancies"]').click();

        cy.log('Выбор фильтров для поиска вакансий');
        cy.get(':nth-child(3) > .radio-component__input').click();
        cy.get(':nth-child(3) > :nth-child(2) > .form-select__selected').click();
        cy.get('.form-select__items > :nth-child(2)').click();
        cy.get(':nth-child(4) > :nth-child(2) > .form-select__selected').click();
        cy.get('.form-select__items > :nth-child(2)').click();

        cy.wait(1000);

        cy.log('Проверка успешной работы фильтров');
        cy.get('.vacancy-list__failed-loading').should('not.exist')
    });
  });
});
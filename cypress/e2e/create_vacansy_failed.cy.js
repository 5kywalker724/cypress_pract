describe('Создание вакансии', () => {
  it('Провальное создание вакансии c некорректными данными', () => {
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
        .type(data.name_vacansy_incorrect, {force: true});

        cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(4) > [data-v-af677f15=""] > :nth-child(1) > .radio-list > :nth-child(3) > .radio-component__input').click();
        cy.get('.form-control--responsive > .form-input--text').type('График обычный').clear();

        cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(5) > .form-control > .form-area').type(data.requires_vacansy_incorrect);
        cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(6) > .form-control > .form-area').type(data.duty_vacansy_incorrect);

        cy.log('Проверка несоздавшейся вакансии c некорректным названием');
        cy.get('.form-error > span').should('exist');
    });
  });
  // it('Провальное создание вакансии c некорректным названием вакансии', () => {
  //     cy.fixture('employer').then(data => {
  //         cy.log('Переход на страницу авторизации');
  //         cy.visit(data.main_url);

  //         cy.log('Ввод существующего логина');
  //         cy.get('.form-input--text').type(data.name);

  //         cy.log('Ввод существующего пароля');
  //         cy.get('.form-input--password').type(data.password);

  //         cy.log('Клик по кнопке "Войти"');
  //         cy.get(':nth-child(3) > .button').click();

  //         cy.log('Клик по кнопке "Вакансии"');
  //         cy.get(':nth-child(7) > .menu-item__item-name').click();

  //         cy.log('Клик по кнопке "Создать вакансию"');
  //         cy.get('[data-v-94414c9f=""][data-v-4849dea2=""] > .vacancies-block > .vacancies-block__filters-wrapper > .button').click();

  //         cy.log('Ввод необходимых данных для создания вакансии');
  //         cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(1) > .form-control--responsive > .form-input--')
  //         .type(data.name_vacansy_incorrect, {force: true});
  //         cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(5) > .form-control > .form-area').type(data.requires_vacansy);
  //         cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(6) > .form-control > .form-area').type(data.duty_vacansy);

  //         cy.log('Проверка несоздавшейся вакансии c некорректным названием');
  //         cy.get('.form-error > span').should('exist');
  //     });
  // });
  // it('Провальное создание вакансии c некорректным графиком вакансии', () => {
  //   cy.fixture('employer').then(data => {
  //       cy.log('Переход на страницу авторизации');
  //       cy.visit(data.main_url);

  //       cy.log('Ввод существующего логина');
  //       cy.get('.form-input--text').type(data.name);

  //       cy.log('Ввод существующего пароля');
  //       cy.get('.form-input--password').type(data.password);

  //       cy.log('Клик по кнопке "Войти"');
  //       cy.get(':nth-child(3) > .button').click();

  //       cy.log('Клик по кнопке "Вакансии"');
  //       cy.get(':nth-child(7) > .menu-item__item-name').click();

  //       cy.log('Клик по кнопке "Создать вакансию"');
  //       cy.get('[data-v-94414c9f=""][data-v-4849dea2=""] > .vacancies-block > .vacancies-block__filters-wrapper > .button').click();

  //       cy.log('Ввод необходимых данных для создания вакансии');
  //       cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(1) > .form-control--responsive > .form-input--')
  //       .type(data.name_vacansy, {force: true});

  //       cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(4) > [data-v-af677f15=""] > :nth-child(1) > .radio-list > :nth-child(3) > .radio-component__input').click();
  //       cy.get('.form-control--responsive > .form-input--text').type('График обычный').clear();

  //       cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(5) > .form-control > .form-area').type(data.requires_vacansy);
  //       cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(6) > .form-control > .form-area').type(data.duty_vacansy);

  //       cy.log('Проверка несоздавшейся вакансии c некорректным графиком');
  //       cy.get('.form-error > span').should('exist');
  //   });
  // });
  // it('Провальное создание вакансии c некорректным требованием вакансии', () => {
  //   cy.fixture('employer').then(data => {
  //       cy.log('Переход на страницу авторизации');
  //       cy.visit(data.main_url);

  //       cy.log('Ввод существующего логина');
  //       cy.get('.form-input--text').type(data.name);

  //       cy.log('Ввод существующего пароля');
  //       cy.get('.form-input--password').type(data.password);

  //       cy.log('Клик по кнопке "Войти"');
  //       cy.get(':nth-child(3) > .button').click();

  //       cy.log('Клик по кнопке "Вакансии"');
  //       cy.get(':nth-child(7) > .menu-item__item-name').click();

  //       cy.log('Клик по кнопке "Создать вакансию"');
  //       cy.get('[data-v-94414c9f=""][data-v-4849dea2=""] > .vacancies-block > .vacancies-block__filters-wrapper > .button').click();

  //       cy.log('Ввод необходимых данных для создания вакансии');
  //       cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(1) > .form-control--responsive > .form-input--')
  //       .type(data.name_vacansy, {force: true});

  //       cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(5) > .form-control > .form-area').type(data.requires_vacansy_incorrect);
  //       cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(6) > .form-control > .form-area').type(data.duty_vacansy);

  //       cy.log('Проверка несоздавшейся вакансии c некорректным требованием');
  //       cy.get('.form-error > span').should('exist');
  //   });
  // });
  // it('Провальное создание вакансии c некорректной обязанностью вакансии', () => {
  //   cy.fixture('employer').then(data => {
  //       cy.log('Переход на страницу авторизации');
  //       cy.visit(data.main_url);

  //       cy.log('Ввод существующего логина');
  //       cy.get('.form-input--text').type(data.name);

  //       cy.log('Ввод существующего пароля');
  //       cy.get('.form-input--password').type(data.password);

  //       cy.log('Клик по кнопке "Войти"');
  //       cy.get(':nth-child(3) > .button').click();

  //       cy.log('Клик по кнопке "Вакансии"');
  //       cy.get(':nth-child(7) > .menu-item__item-name').click();

  //       cy.log('Клик по кнопке "Создать вакансию"');
  //       cy.get('[data-v-94414c9f=""][data-v-4849dea2=""] > .vacancies-block > .vacancies-block__filters-wrapper > .button').click();

  //       cy.log('Ввод необходимых данных для создания вакансии');
  //       cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(1) > .form-control--responsive > .form-input--')
  //       .type(data.name_vacansy, {force: true});

  //       cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(5) > .form-control > .form-area').type(data.requires_vacansy);
  //       cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(6) > .form-control > .form-area').type(data.duty_vacansy_incorrect);

  //       cy.log('Проверка несоздавшейся вакансии c некорректной обязанностью');
  //       cy.get('.form-error > span').should('exist');
  //   });
  // });
});
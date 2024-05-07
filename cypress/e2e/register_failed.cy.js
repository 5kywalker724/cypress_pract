describe('Automize tests', () => {
  // it('Провальный тест регистрации c некорректным логином', () => {
  //     cy.fixture('register').then(data => {
  //         cy.log('Переход на страницу регистрации');
  //         cy.visit(data.main_url);

  //         cy.log('Ввод некорректного логина');
  //         cy.get(':nth-child(1) > :nth-child(1) >.form-control--medium > .form-input--text').type(data.login_incorrect);

  //         cy.log('Ввод корректной почты');
  //         cy.get('.form-input--email').type(data.email);

  //         cy.log('Ввод корректного пароля');
  //         cy.get(':nth-child(3) > .form-control--medium .form-input--password').type(data.password);

  //         cy.log('Ввод корректного пароля для подтверждения');
  //         cy.get(':nth-child(4) > .form-control--medium .form-input--password').type(data.password_confirm);

  //         cy.log("Проверка что пользователь не зарегистрировался и логин некорректный");
  //         cy.get('.form-error > span').should('exist');
  //     });
  // });
  // it('Провальный тест регистрации c неуникальным логином', () => {
  //   cy.fixture('register').then(data => {
  //       cy.log('Переход на страницу регистрации');
  //       cy.visit(data.main_url);

  //       cy.log('Ввод некорректного логина');
  //       cy.get(':nth-child(1) > :nth-child(1) >.form-control--medium > .form-input--text').type(data.login_unique);

  //       cy.log('Ввод корректной почты');
  //       cy.get('.form-input--email').type(data.email);

  //       cy.log('Ввод корректного пароля');
  //       cy.get(':nth-child(3) > .form-control--medium .form-input--password').type(data.password);

  //       cy.log('Ввод корректного пароля для подтверждения');
  //       cy.get(':nth-child(4) > .form-control--medium .form-input--password').type(data.password_confirm);

  //       cy.log("Проверка что пользователь не зарегистрировался и логин неуникальный");
  //       cy.get('.form-error > span').should('exist');
  //   });
  // });
  // it('Провальный тест регистрации c некорректной почтой', () => {
  //   cy.fixture('register').then(data => {
  //       cy.log('Переход на страницу регистрации');
  //       cy.visit(data.main_url);

  //       cy.log('Ввод корректного логина');
  //       cy.get(':nth-child(1) > :nth-child(1) >.form-control--medium > .form-input--text').type(data.login);

  //       cy.log('Ввод некорректной почты');
  //       cy.get('.form-input--email').type(data.email_incorrect);

  //       cy.log('Ввод корректного пароля');
  //       cy.get(':nth-child(3) > .form-control--medium .form-input--password').type(data.password);

  //       cy.log('Ввод корректного пароля для подтверждения');
  //       cy.get(':nth-child(4) > .form-control--medium .form-input--password').type(data.password_confirm);

  //       cy.log("Проверка что пользователь не зарегистрировался и почта некорректная");
  //       cy.get('.form-error > span').should('exist');
  //   });
  // });
  // it('Провальный тест регистрации c неуникальной почтой', () => {
  //   cy.fixture('register').then(data => {
  //       cy.log('Переход на страницу регистрации');
  //       cy.visit(data.main_url);

  //       cy.log('Ввод корректного логина');
  //       cy.get(':nth-child(1) > :nth-child(1) >.form-control--medium > .form-input--text').type(data.login);

  //       cy.log('Ввод неуникальной почты');
  //       cy.get('.form-input--email').type(data.email_unique);

  //       cy.log('Ввод корректного пароля');
  //       cy.get(':nth-child(3) > .form-control--medium .form-input--password').type(data.password);

  //       cy.log('Ввод корректного пароля для подтверждения');
  //       cy.get(':nth-child(4) > .form-control--medium .form-input--password').type(data.password_confirm);

  //       cy.log("Проверка что пользователь не зарегистрировался и почта неуникальная");
  //       cy.get('.form-error > span').should('exist');
  //   });
  // });
  // it('Провальный тест регистрации c некорректным паролем', () => {
  //   cy.fixture('register').then(data => {
  //       cy.log('Переход на страницу регистрации');
  //       cy.visit(data.main_url);

  //       cy.log('Ввод корректного логина');
  //       cy.get(':nth-child(1) > :nth-child(1) >.form-control--medium > .form-input--text').type(data.login);

  //       cy.log('Ввод корректной почты');
  //       cy.get('.form-input--email').type(data.email);

  //       cy.log('Ввод некорректного пароля');
  //       cy.get(':nth-child(3) > .form-control--medium .form-input--password').type(data.password_incorrect);

  //       cy.log('Ввод корректного пароля для подтверждения');
  //       cy.get(':nth-child(4) > .form-control--medium .form-input--password').type(data.password_confirm_incorrect);

  //       cy.log("Проверка что пользователь не зарегистрировался и пароль некорректный");
  //       cy.get('.form-error > span').should('exist');
  //   });
  // });
  // it('Провальный тест регистрации c некорректным паролем для подтверждения', () => {
  //   cy.fixture('register').then(data => {
  //       cy.log('Переход на страницу регистрации');
  //       cy.visit(data.main_url);

  //       cy.log('Ввод корректного логина');
  //       cy.get(':nth-child(1) > :nth-child(1) >.form-control--medium > .form-input--text').type(data.login);

  //       cy.log('Ввод корректной почты');
  //       cy.get('.form-input--email').type(data.email);

  //       cy.log('Ввод корректного пароля');
  //       cy.get(':nth-child(3) > .form-control--medium .form-input--password').type(data.password);

  //       cy.log('Ввод корректного пароля для подтверждения');
  //       cy.get(':nth-child(4) > .form-control--medium .form-input--password').type(data.password_confirm_incorrect);

  //       cy.log("Проверка что пользователь не зарегистрировался и пароль для подтверждения некорректный");
  //       cy.get('.form-error > span').should('exist');
  //   });
  // });
  // it('Провальный тест регистрации c некорректной фамилией', () => {
  //   cy.fixture('register').then(data => {
  //       cy.log('Переход на страницу регистрации');
  //       cy.visit(data.main_url);

  //       cy.log('Ввод корректного логина');
  //       cy.get(':nth-child(1) > :nth-child(1) >.form-control--medium > .form-input--text').type(data.login);

  //       cy.log('Ввод корректной почты');
  //       cy.get('.form-input--email').type(data.email);

  //       cy.log('Ввод корректного пароля');
  //       cy.get(':nth-child(3) > .form-control--medium .form-input--password').type(data.password);

  //       cy.log('Ввод корректного пароля для подтверждения');
  //       cy.get(':nth-child(4) > .form-control--medium .form-input--password').type(data.password_confirm);

  //       cy.log('Клик по кнопке "Войти"');
  //       cy.get(':nth-child(4) > .button').click();

  //       cy.log('Ввод корректной фамилии');
  //       cy.get('[style=""] > :nth-child(1) > .form-control--medium > .form-input--text').type(data.surname_incorrect);

  //       cy.log('Ввод корректного имени');
  //       cy.get(':nth-child(2) > .form-control--medium > .form-input--text').type(data.name);

  //       cy.log('Ввод корректного отчества')
  //       cy.get(':nth-child(3) > .form-control--medium > .form-input--text').type(data.patronymic);

  //       cy.log("Проверка что пользователь не зарегистрировался и фамилия некорректная");
  //       cy.get('.form-error > span').should('exist');
  //   });
  // });
  // it('Провальный тест регистрации c некорректным именем', () => {
  //   cy.fixture('register').then(data => {
  //       cy.log('Переход на страницу регистрации');
  //       cy.visit(data.main_url);

  //       cy.log('Ввод корректного логина');
  //       cy.get(':nth-child(1) > :nth-child(1) >.form-control--medium > .form-input--text').type(data.login);

  //       cy.log('Ввод корректной почты');
  //       cy.get('.form-input--email').type(data.email);

  //       cy.log('Ввод корректного пароля');
  //       cy.get(':nth-child(3) > .form-control--medium .form-input--password').type(data.password);

  //       cy.log('Ввод корректного пароля для подтверждения');
  //       cy.get(':nth-child(4) > .form-control--medium .form-input--password').type(data.password_confirm);

  //       cy.log('Клик по кнопке "Войти"');
  //       cy.get(':nth-child(4) > .button').click();

  //       cy.log('Ввод корректной фамилии');
  //       cy.get('[style=""] > :nth-child(1) > .form-control--medium > .form-input--text').type(data.surname);

  //       cy.log('Ввод корректного имени');
  //       cy.get(':nth-child(2) > .form-control--medium > .form-input--text').type(data.name_incorrect);

  //       cy.log('Ввод корректного отчества');
  //       cy.get(':nth-child(3) > .form-control--medium > .form-input--text').type(data.patronymic);

  //       cy.log("Проверка что пользователь не зарегистрировался и фамилия некорректная");
  //       cy.get('.form-error > span').should('exist');
  //   });
  // });
  // it('Провальный тест регистрации c некорректным отчеством', () => {
  //   cy.fixture('register').then(data => {
  //       cy.log('Переход на страницу регистрации');
  //       cy.visit(data.main_url);

  //       cy.log('Ввод корректного логина');
  //       cy.get(':nth-child(1) > :nth-child(1) >.form-control--medium > .form-input--text').type(data.login);

  //       cy.log('Ввод корректной почты');
  //       cy.get('.form-input--email').type(data.email);

  //       cy.log('Ввод корректного пароля');
  //       cy.get(':nth-child(3) > .form-control--medium .form-input--password').type(data.password);

  //       cy.log('Ввод корректного пароля для подтверждения');
  //       cy.get(':nth-child(4) > .form-control--medium .form-input--password').type(data.password_confirm);

  //       cy.log('Клик по кнопке "Войти"');
  //       cy.get(':nth-child(4) > .button').click();

  //       cy.log('Ввод корректной фамилии');
  //       cy.get('[style=""] > :nth-child(1) > .form-control--medium > .form-input--text').type(data.surname);

  //       cy.log('Ввод корректного имени');
  //       cy.get(':nth-child(2) > .form-control--medium > .form-input--text').type(data.name);

  //       cy.log('Ввод корректного отчества');
  //       cy.get(':nth-child(3) > .form-control--medium > .form-input--text').type(data.patronymic_incorrect);

  //       cy.log("Проверка что пользователь не зарегистрировался и отчество некорректное");
  //       cy.get('.form-error > span').should('exist');
  //   });
  // });
  it('Провальный тест выбора роли "Студент"', () => {
    cy.fixture('register').then(data => {
        cy.log('Переход на страницу регистрации');
        cy.visit('https://dev.profteam.su/login');

        cy.log('Ввод существующего логина');
        cy.get('.form-input--text').type(data.registered_login);

        cy.log('Ввод существующего пароля');
        cy.get('.form-input--password').type(data.registered_password);

        cy.log('Клик по кнопке "Войти"');
        cy.get(':nth-child(3) > .button').click();

        cy.get('.page-nav__role-block > .button').click();
        cy.get('.select-role-form > :nth-child(1)').click();
        cy.get('.variants-company > :nth-child(1)').click();
        cy.get('div.search-input__field > .form-input--text').type('Сибкабель');
        cy.get('.search-input__item').click();
        cy.get('.choose-company > .button').click();

        cy.log("Проверка провального добавления роли 'Студент' для пользователя");
        cy.get('.menu-item__name').should('have.text', 'Роль не определена');
        cy.get('[data-v-02661ece=""][data-v-4e40dec7=""]').should('not.exist');
        cy.get(':nth-child(3) > .menu-item__item-name').click();
        // cy.get('.shared-list-item').should('exist');
        cy.get(':nth-child(1) > .shared-list-item').should('exist');
        cy.get(':nth-child(1) > .shared-list-item > .shared-list-item__content > .shared-list-item__text > .shared-list-item__title > span')
            .should('have.text', 'Заявка с прикреплением к Сибкабель по адресу г. Томск, ул. Пушкина, д.46');
        // cy.get('.shared-list-item__title > span').should('have.text', 'Заявка с прикреплением к Сибкабель по адресу г. Томск, ул. Пушкина, д.46');
    });
  });
});
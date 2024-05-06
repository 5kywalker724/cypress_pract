describe('Automize tests', () => {
  // it('Успешный тест регистрации', () => {
  //     cy.fixture('register').then(data => {
  //         cy.log('Переход на страницу регистрации');
  //         cy.visit(data.main_url);

  //         cy.log('Ввод корректного логина');
  //         cy.get(':nth-child(1) > :nth-child(1) >.form-control--medium > .form-input--text').type(data.login);

  //         cy.log('Ввод корректной почты');
  //         cy.get('.form-input--email').type(data.email);

  //         cy.log('Ввод корректного пароля');
  //         cy.get(':nth-child(3) > .form-control--medium .form-input--password').type(data.password);

  //         cy.log('Ввод корректного пароля для подтверждения');
  //         cy.get(':nth-child(4) > .form-control--medium .form-input--password').type(data.password_confirm);

  //         cy.log('Клик по кнопке "Войти"');
  //         cy.get(':nth-child(4) > .button').click();

  //         cy.log('Ввод корректной фамилии');
  //         cy.get('[style=""] > :nth-child(1) > .form-control--medium > .form-input--text').type(data.surname);

  //         cy.log('Ввод корректного имени')
  //         cy.get(':nth-child(2) > .form-control--medium > .form-input--text').type(data.name)

  //         cy.log('Ввод корректного отчества')
  //         cy.get(':nth-child(3) > .form-control--medium > .form-input--text').type(data.patronymic)

  //         cy.log('Клик по кнопке "Создать аккаунт"')
  //         cy.get(':nth-child(3) > .button').click()

  //         cy.log("Проверка что пользователь успешно зарегистрировался");
  //         cy.url().should('equal', 'https://dev.profteam.su/account/main');
  //     });
  // });
  it('Успешный тест выбора роли "Студент"', () => {
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
        cy.get('.select-role-form > :nth-child(3)').click();

        cy.log("Проверка успешного добавления роли 'Студент' для пользователя");
        cy.get('.menu-item__name').should('have.text', 'Студент');
        cy.get('[data-v-02661ece=""][data-v-4e40dec7=""]').should('exist');
    });
  });
});
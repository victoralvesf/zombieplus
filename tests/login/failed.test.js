export default {
  before: (browser) => {
    browser.resizeWindow(1600, 900);
  },
  after: (browser) => {
    browser.end();
  },

  'incorrect password': (browser) => {
    const alert = '.alert-danger';
    const login = browser.page.login();

    login
      .navigate()
      .waitForElementVisible('@loginForm', 3000)
      .setValue('@emailInput', 'victor@qaninja.io')
      .setValue('@passwordInput', 'fakepass')
      .click('@loginButton');

    browser
      .waitForElementVisible(alert)
      .assert.containsText(alert, 'Usuário e/ou senha inválidos');
  },
  'unregistered email': (browser) => {
    const alert = '.alert-danger';
    const login = browser.page.login();

    login
      .navigate()
      .waitForElementVisible('@loginForm', 3000)
      .setValue('@emailInput', 'fake@qaninja.io')
      .setValue('@passwordInput', 'fakepass')
      .click('@loginButton');

    browser
      .waitForElementVisible(alert)
      .assert.containsText(alert, 'Usuário e/ou senha inválidos');
  },
  'email not informed': (browser) => {
    const alert = '.alert-info';
    const login = browser.page.login();

    login
      .navigate()
      .waitForElementVisible('@loginForm', 3000)
      .setValue('@passwordInput', 'fakepass')
      .click('@loginButton');

    browser
      .waitForElementVisible(alert)
      .assert.containsText(alert, 'Opps. Cadê o email?');
  },
  'password not informed': (browser) => {
    const alert = '.alert-info';
    const login = browser.page.login();

    login
      .navigate()
      .waitForElementVisible('@loginForm', 3000)
      .setValue('@emailInput', 'victor@qaninja.io')
      .click('@loginButton');

    browser
      .waitForElementVisible(alert)
      .assert.containsText(alert, 'Opps. Cadê a senha?');
  },
};

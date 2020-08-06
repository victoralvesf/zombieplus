export default {
  before: (browser) => {
    browser.resizeWindow(1600, 900);
  },
  after: (browser) => {
    browser.end();
  },

  'incorrect password': (browser) => {
    const login = browser.page.login();
    login
      .navigate()
      .waitForElementVisible('@loginForm', 3000)
      .setValue('@emailInput', 'victor@qaninja.io')
      .setValue('@passwordInput', 'fakepass')
      .click('@loginButton')
      .waitForElementVisible('@alertDanger')
      .assert.containsText('@alertDanger', 'Usuário e/ou senha inválidos');
  },

  'unregistered email': (browser) => {
    const login = browser.page.login();
    login
      .navigate()
      .waitForElementVisible('@loginForm', 3000)
      .setValue('@emailInput', 'fake@qaninja.io')
      .setValue('@passwordInput', 'fakepass')
      .click('@loginButton')
      .waitForElementVisible('@alertDanger')
      .assert.containsText('@alertDanger', 'Usuário e/ou senha inválidos');
  },

  'email not informed': (browser) => {
    const login = browser.page.login();
    login
      .navigate()
      .waitForElementVisible('@loginForm', 3000)
      .setValue('@passwordInput', 'fakepass')
      .click('@loginButton')
      .waitForElementVisible('@alertInfo')
      .assert.containsText('@alertInfo', 'Opps. Cadê o email?');
  },

  'password not informed': (browser) => {
    const login = browser.page.login();
    login
      .navigate()
      .waitForElementVisible('@loginForm', 3000)
      .setValue('@emailInput', 'victor@qaninja.io')
      .click('@loginButton')
      .waitForElementVisible('@alertInfo')
      .assert.containsText('@alertInfo', 'Opps. Cadê a senha?');
  },
};

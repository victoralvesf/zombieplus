export default {
  before: (browser) => {
    browser.resizeWindow(1600, 900);
  },
  after: (browser) => {
    browser.end();
  },
  'successfully login': (browser) => {
    const userInfo = '.user .info span';
    const login = browser.page.login();

    login
      .navigate()
      .waitForElementVisible('@loginForm', 3000)
      .setValue('@emailInput', 'victor@qaninja.io')
      .setValue('@passwordInput', 'qaninja')
      .click('@loginButton');

    browser
      .waitForElementVisible(userInfo, 3000)
      .assert.containsText(userInfo, 'Victor');
  },
};

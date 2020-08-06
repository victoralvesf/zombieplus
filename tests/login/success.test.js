export default {
  before: (browser) => {
    browser.resizeWindow(1600, 900);
  },
  after: (browser) => {
    browser.end();
  },

  'successfully login': (browser) => {
    const login = browser.page.login();
    const sidebar = browser.page.sidebar();

    login.with('victor@qaninja.io', 'qaninja');

    sidebar
      .waitForElementVisible('@userInfo', 3000)
      .assert.containsText('@userInfo', 'Victor');
  },
};

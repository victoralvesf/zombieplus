export default {
  'login com sucesso': (browser) => {
    const userInfo = '.user .info span';

    browser
      .resizeWindow(1600, 900)
      .url('http://zombie:5000/login')
      .waitForElementVisible('.card-login', 3000)
      .setValue('input[name="email"]', 'victor@qaninja.io')
      .setValue('input[name="password"]', 'qaninja')
      .click('.login-button')
      .waitForElementVisible(userInfo, 3000)
      .assert.containsText(userInfo, 'Victor')
      .end();
  },
};

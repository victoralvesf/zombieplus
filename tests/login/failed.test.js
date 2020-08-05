export default {
  'incorrect password': (browser) => {
    const alert = '.alert-danger';

    browser
      .resizeWindow(1600, 900)
      .url('http://zombie:5000/login')
      .waitForElementVisible('.card-login', 3000)
      .setValue('input[name="email"]', 'victor@qaninja.io')
      .setValue('input[name="password"]', 'fakepass')
      .click('.login-button')
      .waitForElementVisible(alert)
      .assert.containsText(alert, 'Usuário e/ou senha inválidos');
  },
  'unregistered email': (browser) => {
    const alert = '.alert-danger';

    browser
      .resizeWindow(1600, 900)
      .url('http://zombie:5000/login')
      .waitForElementVisible('.card-login', 3000)
      .setValue('input[name="email"]', 'fake@qaninja.io')
      .setValue('input[name="password"]', 'fakepass')
      .click('.login-button')
      .waitForElementVisible(alert)
      .assert.containsText(alert, 'Usuário e/ou senha inválidos');
  },
  'email not informed': (browser) => {
    const alert = '.alert-info';

    browser
      .resizeWindow(1600, 900)
      .url('http://zombie:5000/login')
      .waitForElementVisible('.card-login', 3000)
      .setValue('input[name="password"]', 'fakepass')
      .click('.login-button')
      .waitForElementVisible(alert)
      .assert.containsText(alert, 'Opps. Cadê o email?');
  },
  'password not informed': (browser) => {
    const alert = '.alert-info';

    browser
      .resizeWindow(1600, 900)
      .url('http://zombie:5000/login')
      .waitForElementVisible('.card-login', 3000)
      .setValue('input[name="email"]', 'victor@qaninja.io')
      .click('.login-button')
      .waitForElementVisible(alert)
      .assert.containsText(alert, 'Opps. Cadê a senha?')
      .end();
  },
};

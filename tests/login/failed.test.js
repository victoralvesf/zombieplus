export default {
  'incorrect password': (browser) => {
    const login = browser.page.login();
    login
      .with('victor@qaninja.io', 'fakepass')
      .shouldSeeAlertWithText('@alertDanger', 'Usuário e/ou senha inválidos');
  },

  'unregistered email': (browser) => {
    const login = browser.page.login();
    login
      .with('fake@qaninja.io', 'fakepass')
      .shouldSeeAlertWithText('@alertDanger', 'Usuário e/ou senha inválidos');
  },

  'email not informed': (browser) => {
    const login = browser.page.login();
    login
      .with('', 'fakepass')
      .shouldSeeAlertWithText('@alertInfo', 'Opps. Cadê o email?');
  },

  'password not informed': (browser) => {
    const login = browser.page.login();
    login
      .with('victor@qaninja.io', '')
      .shouldSeeAlertWithText('@alertInfo', 'Opps. Cadê a senha?');
  },
};

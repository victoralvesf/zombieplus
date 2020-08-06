export default {
  'incorrect password': (browser) => {
    const login = browser.page.login();
    login
      .with('victor@qaninja.io', 'fakepass')
      .shouldSeeAlertDanger('Usuário e/ou senha inválidos');
  },

  'unregistered email': (browser) => {
    const login = browser.page.login();
    login
      .with('fake@qaninja.io', 'fakepass')
      .shouldSeeAlertDanger('Usuário e/ou senha inválidos');
  },

  'email not informed': (browser) => {
    const login = browser.page.login();
    // prettier-ignore
    login
      .with('', 'fakepass')
      .shouldSeeAlertInfo('Opps. Cadê o email?');
  },

  'password not informed': (browser) => {
    const login = browser.page.login();
    login
      .with('victor@qaninja.io', '')
      .shouldSeeAlertInfo('Opps. Cadê a senha?');
  },
};

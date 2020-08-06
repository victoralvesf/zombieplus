export default {
  'incorrect password': (browser) => {
    const login = browser.page.login();
    login
      .with('victor@qaninja.io', 'fakepass')
      .shouldSeeAlertDanger('Usuário e/ou senha inválidos');
  },
};

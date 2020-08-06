export default {
  'unregistered email': (browser) => {
    const login = browser.page.login();
    login
      .with('fake@qaninja.io', 'fakepass')
      .shouldSeeAlertDanger('Usuário e/ou senha inválidos');
  },
};

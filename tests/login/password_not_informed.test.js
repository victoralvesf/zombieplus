export default {
  'password not informed': (browser) => {
    const login = browser.page.login();
    login
      .with('victor@qaninja.io', '')
      .shouldSeeAlertInfo('Opps. Cadê a senha?');
  },
};

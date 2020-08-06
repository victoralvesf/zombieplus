export default {
  'email not informed': (browser) => {
    const login = browser.page.login();
    // prettier-ignore
    login
      .with('', 'fakepass')
      .shouldSeeAlertInfo('Opps. Cadê o email?');
  },
};

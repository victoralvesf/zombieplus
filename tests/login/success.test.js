export default {
  'successfully login': (browser) => {
    const login = browser.page.login();
    const sidebar = browser.page.sidebar();

    login.with('victor@qaninja.io', 'qaninja');
    sidebar.expectLoggedUser('Victor');
  },
};

export default {
  before: (browser) => {
    const login = browser.page.login();
    const sidebar = browser.page.sidebar();

    login.with('victor@qaninja.io', 'qaninja');
    sidebar.expectLoggedUser('Victor');
  },

  'when i search a movie not registered': (browser) => {
    const movie = browser.page.movie();

    movie.searchMovie('Coringa');
  },

  'then i should see an alert message': (browser) => {
    const movie = browser.page.movie();

    // prettier-ignore
    movie
      .waitForElementVisible('@alertDanger')
      .assert.containsText('@alertDanger', 'Puxa! não encontramos nada aqui :(');
  },
};

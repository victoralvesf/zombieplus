import pg from '../../db/database';

let movieData;

export default {
  before: async (browser) => {
    movieData = {
      title: 'Resident Evil',
      status: 'Disponível',
      year: 2002,
      releaseDate: '30/05/2002',
      cast: ['Milla Jovovich', 'Michelle Rodriguez', 'Eric Mabius'],
      cover: 'resident-evil-2002.jpg',
      synopsis: `Uma unidade militar especial é recrutada para lutar contra um poderoso e descontrolado supercomputador e centenas de cientistas mutantes, criaturas que se alimentam de carne humana, depois de um acidente de laboratório.`,
    };

    await pg.removeMovieByTitle(movieData.title);

    const login = browser.page.login();
    const sidebar = browser.page.sidebar();

    login.with('victor@qaninja.io', 'qaninja');
    sidebar.expectLoggedUser('Victor');
  },

  'when i see the movie form': (browser) => {
    const movie = browser.page.movie();

    movie
      .register()
      .setValue('@titleInput', movieData.title)
      .selectStatus(movieData.status)
      .setValue('@yearInput', movieData.year)
      .setValue('@releaseDateInput', movieData.releaseDate)
      .insertCast(movieData.cast)
      .setValue('@synopsisTextarea', movieData.synopsis)
      .uploadCover(movieData.cover)
      .click('@saveButton');
  },

  'then i should see the movie on list': (browser) => {
    const movie = browser.page.movie();
    movie
      .waitForElementVisible('@moviesTable', 3000)
      .assert.containsText('@moviesTable', movieData.title);
  },
};

import pg from '../../db/database';

let movieData = {};

export default {
  before: async (browser) => {
    movieData = {
      title: 'Meu Namorado é um Zumbi',
      status: 'Disponível',
      year: 2013,
      releaseDate: '08/02/2013',
      cast: [
        'Nicholas Hoult',
        'Teresa Palmer',
        'Analeigh Tipton',
        'John Malkovich',
      ],
      cover: 'meu-namo-zumbi-2013.jpg',
      synopsis:
        'Em um mundo pós-apocalíptico, um zumbi romântico se apaixona por uma humana, e o envolvimento deles cria uma reação em cadeia. Ele quer provar que os zumbis podem mudar, mas o cenário indica uma batalha entre os vivos e os mortos-vivos.',
    };

    await pg.removeMovieByTitle(movieData.title);
    await pg.insertMovie(movieData);

    const login = browser.page.login();
    const sidebar = browser.page.sidebar();

    login.with('victor@qaninja.io', 'qaninja');
    sidebar.expectLoggedUser('Victor');
  },

  'when i do the search by title': (browser) => {
    const movie = browser.page.movie();

    movie.searchMovie(movieData.title);
  },

  'then i have to see this title on the list': (browser) => {
    const movie = browser.page.movie();

    movie.waitForElementPresent('@tr').expect.elements('@tr').count.to.equal(1);
    movie.assert.containsText('@tr', movieData.title);
  },
};

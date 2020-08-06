import path from 'path';

const movieActions = {
  register: function () {
    return this.click('@addButton').waitForElementVisible('@movieForm');
  },
  selectStatus: function (status) {
    const selector = `//li//span[contains(text(), "${status}")]`;

    return this.click('@statusSelect')
      .useXpath()
      .waitForElementVisible(selector)
      .click(selector)
      .useCss();
  },
  insertCast: function (cast) {
    cast.map((actor) => {
      this.setValue('@castInput', [actor, this.api.Keys.ENTER]);
    });
    return this;
  },
  uploadCover: function (filename) {
    const imagePath = path.resolve(__dirname, '..', 'images', filename);

    return this.setValue('@coverUploadInput', imagePath)
      .pause(500)
      .assert.attributeContains('.picture-src', 'src', 'blob');
  },
};

export default {
  commands: [movieActions],
  elements: {
    addButton: '.movie-add',
    searchInput: 'input[placeholder^="Pesquisar"]',
    searchButton: '#search-movie',
    movieForm: '#movie-form',
    titleInput: 'input[name="title"]',
    statusSelect: 'input[placeholder="Status"]',
    yearInput: 'input[name="year"]',
    releaseDateInput: 'input[name="release_date"]',
    castInput: '.cast',
    synopsisTextarea: 'textarea[name="overview"]',
    coverUploadInput: 'input[type="file"]',
    saveButton: '#create-movie',
    moviesTable: '.table-movies table tbody',
    tr: '.table-movies table tbody tr',
  },
};

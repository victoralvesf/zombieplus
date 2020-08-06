export default {
  beforeEach: (browser, done) => {
    browser.resizeWindow(1600, 900);
    done();
  },
  afterEach: (browser, done) => {
    browser.end();
    done();
  },
};

const userActions = {
  expectLoggedUser: function (name) {
    // prettier-ignore
    return this
      .waitForElementVisible('@userInfo', 3000)
      .assert.containsText('@userInfo', name);
  },
};

export default {
  commands: [userActions],
  elements: {
    userInfo: '.user .info span',
  },
};

const loginActions = {
  with: function (email, password) {
    return this.navigate()
      .waitForElementVisible('@loginForm', 3000)
      .setValue('@emailInput', email)
      .setValue('@passwordInput', password)
      .click('@loginButton');
  },
  shouldSeeAlertDanger: function (text) {
    // prettier-ignore
    return this
      .waitForElementVisible('@alertDanger', 3000)
      .assert.containsText('@alertDanger', text);
  },
  shouldSeeAlertInfo: function (text) {
    // prettier-ignore
    return this
      .waitForElementVisible('@alertInfo', 3000)
      .assert.containsText('@alertInfo', text);
  },
};

export default {
  url: 'http://zombie:5000/login',
  commands: [loginActions],
  elements: {
    loginForm: '.card-login',
    emailInput: 'input[name="email"]',
    passwordInput: 'input[name="password"]',
    loginButton: '.login-button',
    alertDanger: '.alert-danger',
    alertInfo: '.alert-info',
  },
};

require('@babel/register')();

const chromedriver = require('chromedriver');
const geckodriver = require('geckodriver');

const defaultUrl = 'http://zombie:5000';
const timeout = 10000;

module.exports = {
  src_folders: ['tests'],

  page_objects_path: './pages',
  globals_path: './hooks/globals.js',

  webdriver: {
    start_process: true,
  },

  test_settings: {
    default: {
      launch_url: defaultUrl,
      globals: {
        waitForConditionTimeout: timeout,
      },
      webdriver: {
        server_path: chromedriver.path,
        port: 9515,
      },
      desiredCapabilities: {
        browserName: 'chrome',
      },
    },

    firefox: {
      launch_url: defaultUrl,
      globals: {
        waitForConditionTimeout: timeout,
      },
      webdriver: {
        server_path: geckodriver.path,
        port: 4444,
      },
      desiredCapabilities: {
        browserName: 'firefox',
        acceptInsecureCerts: true,
      },
    },

    headless: {
      launch_url: defaultUrl,
      globals: {
        waitForConditionTimeout: timeout,
      },
      webdriver: {
        server_path: chromedriver.path,
        port: 9515,
      },
      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: {
          w3c: false,
          args: ['--headless', '--no-sandbox'],
        },
      },
    },

    stage: {
      launch_url: 'http://stage.zombie:5001',
    },

    production: {
      launch_url: 'http://production.zombie:5001',
    },
  },
};

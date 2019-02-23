const seleniumServer = require('selenium-server');
const chromedriver = require('chromedriver');
var reporter = require('cucumber-html-reporter');

module.exports = {
  // "test_workers": {
  //   "enabled": true,
  //   "workers": "auto"
  // },

  // output_folder: 'test/reports',
  // "src_folders": ["./"],
  
  custom_assertions_path: '',
  live_output: false,
  disable_colors: false,
  selenium: {
    start_process: true,
    server_path: seleniumServer.path,
    log_path: '',
    host: '127.0.0.1',
    port: 4444
  },
  test_settings: {
    default: {
      launch_url: 'http://localhost:8087',
      selenium_port: 4444,
      selenium_host: '127.0.0.1',
      screenshots: {
        enabled: true,
        on_failure: true,
        path: 'reports/screenshots'
      },
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
        chromeOptions: {
          // args: ['incognito', 'headless', 'no-sandbox', 'disable-gpu']
        }
      },
    },

    chrome: {
      screenshots: {
        enabled: true,
        on_failure: true,
        path: 'reports/screenshots'
      },
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
        chromeOptions: {
          // args: ['incognito', 'headless', 'no-sandbox', 'disable-gpu']
        }
      },
      selenium: {
        cli_args: {
          'webdriver.chrome.driver': chromedriver.path
        }
      }
    },
  }
};

require('nightwatch-cucumber')({

  cucumberArgs: ['--require', 'test/step-definitions',
    '--format', 'node_modules/cucumber-pretty',
    '--format', 'json:reports/cucumber.json',
    'test/features'
  ]

});

var options = {
  theme: 'bootstrap',
  jsonFile: 'reports/cucumber.json',
  output: 'reports/cucumber_reports.html',
  reportSuiteAsScenarios: true,
  launchReport: true,
  metadata: {
    "App Version": "0.3.2",
    "Test Environment": "Demo",
    "Browser": "Chrome  54.0.2840.98",
    "Platform": "Windows 7",
    "Parallel": "Scenarios",
    "Executed": "Local"
  }
};

reporter.generate(options);
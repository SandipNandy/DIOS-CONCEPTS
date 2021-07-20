// An example configuration file.
exports.config = {
  //directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome',
    //'moz:firefoxOptions': {
    //'args': ['--safe-mode']
    },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',
  
  // Spec patterns are relative to the current working directory when
  // protractor is called.
  multiCapabilities: [
    {
      //'browserName': 'firefox'
      "browserName": "chrome",
      "chromeOptions": {
        'binary': "C:\\Program Files\\Google\\Chrome1\\Application\\chrome.exe",  
    },
      logName:"DIOS :- ",
      seleniumAddress: 'http://9.79.208.143:4444/wd/hub',
      specs: ['DIOS.js'],
        },
  ],
  

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    
      defaultTimeoutInterval: 80000000
    },

    onPrepare: function() {
      var AllureReporter = require('jasmine-allure-reporter');
      jasmine.getEnv().addReporter(new AllureReporter({
        resultsDir: 'allure-results'
      }));
    },
     onPrepare: function () {
    var AllureReporter = require('jasmine-allure-reporter');
    jasmine.getEnv().addReporter(new AllureReporter());
    jasmine.getEnv().afterEach(function(done){
      browser.takeScreenshot().then(function (png) {
        allure.createAttachment('Screenshot', function () {
          return new Buffer(png, 'base64')
        }, 'image/png')();
        done();
      })
    });
    
    }
      };



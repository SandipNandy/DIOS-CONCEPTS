// An example configuration file.
exports.config = {
  directConnect: true,

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
  specs: 'DIOS AVNET.js',

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    
      defaultTimeoutInterval: 80000000
    },
   
    params: {
      env: {
         name: 'QA AVNET'
      }
  }, 

  
    onPrepare: function() {
      var AllureReporter = require('jasmine-allure-reporter');
      jasmine.getEnv().addReporter(new AllureReporter({
        resultsDir: 'allure-results DIOS'
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


    

const Jasmine = require("jasmine");
const SpecReporter = require("jasmine-spec-reporter").SpecReporter;

var jasmine = new Jasmine();
//Optional override of the default reporter
jasmine.configureDefaultReporter({
  print: function() {}
});
//Register Reporter
jasmine.addReporter(
  new SpecReporter({
    spec: {
      displayPending: true
    }
  })
);
//load configuration file
jasmine.loadConfigFile("./spec/support/jasmine.json");
//Jasmine Start
jasmine.execute();

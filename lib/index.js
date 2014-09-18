var getAutoprefixProcessor = require("./autoprefix-processor"),
    usage = require("./usage");

module.exports = {
    install: function(less, pluginManager, options) {
        var AutoprefixProcessor = getAutoprefixProcessor(less);
        pluginManager.addPostProcessor(new AutoprefixProcessor(options));
    },
    printUsage: function () {
        usage.printUsage();
    },
    minVersion: [2, 0, 0]
};

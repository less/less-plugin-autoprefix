var autoprefixer = require('autoprefixer-core');

module.exports = function(less) {
    function AutoprefixProcessor(options) {
        this.options = this.interpretOptions(options);
    };

    AutoprefixProcessor.prototype = {
        process: function (css) {
            var options = this.options || {};
            return autoprefixer(options).process(css).css;
        },
        interpretOptions: function(options) {
            if (typeof options === 'string') {
                var browsers = options.split(",");
                options = {browsers: browsers};
            }
            return options;
        }
    };

    return AutoprefixProcessor;
};

var autoprefixer = require('autoprefixer-core');

module.exports = function(less) {
    function AutoprefixProcessor(options) {
        this.options = this.interpretOptions(options);
    };

    AutoprefixProcessor.prototype = {
        process: function (css, lessOptions) {
            var options = this.options || {};
            var sourceMapInline, processOptions = {};

            if (lessOptions.sourceMap) {
                processOptions.map = {};
                sourceMapInline = lessOptions.sourceMap.isInline();
                if (sourceMapInline) {
                    processOptions.map.inline = true;
                } else {
                    processOptions.map.prev = lessOptions.sourceMap.getExternalSourceMap();
                    processOptions.map.annotation = lessOptions.sourceMap.getSourceMapURL();
                }
            }

            var processed = autoprefixer(options).process(css, processOptions);

            if (lessOptions.sourceMap && !sourceMapInline) {
                lessOptions.sourceMap.setExternalSourceMap(processed.map);
            }

            return processed.css;
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

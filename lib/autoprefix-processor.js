var autoprefixer = require('autoprefixer-core');

module.exports = function(less) {
    function AutoprefixProcessor(options) {
        this.options = options || {};
    };

    AutoprefixProcessor.prototype = {
        process: function (css, extra) {
            var options = this.options;
            var sourceMap = extra.sourceMap;
            var sourceMapInline, processOptions = {};

            if (sourceMap) {
                processOptions.map = {};
                processOptions.to = sourceMap.getOutputFilename();
                processOptions.from = sourceMap.getInputFilename();
                sourceMapInline = sourceMap.isInline();
                if (sourceMapInline) {
                    processOptions.map.inline = true;
                } else {
                    processOptions.map.prev = sourceMap.getExternalSourceMap();
                    processOptions.map.annotation = sourceMap.getSourceMapURL();
                }
            }

            var processed = autoprefixer(options).process(css, processOptions);

            if (sourceMap && !sourceMapInline) {
                sourceMap.setExternalSourceMap(processed.map);
            }

            return processed.css;
        }
    };

    return AutoprefixProcessor;
};

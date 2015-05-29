var autoprefixer = require('autoprefixer-core');
var postcss = require('postcss');

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
                // setting from = input filename works unless there is a directory,
                // then autoprefixer adds the directory onto the source filename twice.
                // setting to to anything else causes an un-necessary extra file to be
                // added to the map, but its better than it failing
                processOptions.from = sourceMap.getOutputFilename();
                sourceMapInline = sourceMap.isInline();
                if (sourceMapInline) {
                    processOptions.map.inline = true;
                } else {
                    processOptions.map.prev = sourceMap.getExternalSourceMap();
                    processOptions.map.annotation = sourceMap.getSourceMapURL();
                }
            }

            var processed = postcss([autoprefixer(options)]).process(css, processOptions);

            if (sourceMap && !sourceMapInline) {
                sourceMap.setExternalSourceMap(processed.map);
            }

            return processed.css;
        }
    };

    return AutoprefixProcessor;
};

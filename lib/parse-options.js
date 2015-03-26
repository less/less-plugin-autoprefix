module.exports = function(options) {
    if (typeof options === 'string') {
        var browsers = options.replace(/\s*,\s*/g, ",").split(",");
        options = {browsers: browsers};
    }
    return options;
};

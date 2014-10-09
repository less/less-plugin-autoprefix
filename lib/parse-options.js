module.exports = function(options) {
    if (typeof options === 'string') {
        var browsers = options.split(",");
        options = {browsers: browsers};
    }
    return options;
};

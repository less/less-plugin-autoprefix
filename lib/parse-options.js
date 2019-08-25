module.exports = function(options) {
    if (typeof options === 'string') {
        var options = options.replace(/\s*,\s*/g, ",").split(",");
        var opt = {
            browsers: options.filter(function(el){ return el !== 'grid-on' }),
            grid: options.indexOf('grid-on') != -1 ? true : false
        };
    }
    return opt;
};

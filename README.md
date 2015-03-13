[![NPM version](https://badge.fury.io/js/less-plugin-autoprefix.svg)](http://badge.fury.io/js/less-plugin-autoprefix) [![Dependencies](https://david-dm.org/less/less-plugin-autoprefix.svg)](https://david-dm.org/less/less-plugin-autoprefix) [![devDependency Status](https://david-dm.org/less/less-plugin-autoprefix/dev-status.svg)](https://david-dm.org/less/less-plugin-autoprefix#info=devDependencies) [![optionalDependency Status](https://david-dm.org/less/less-plugin-autoprefix/optional-status.svg)](https://david-dm.org/less/less-plugin-autoprefix#info=optionalDependencies)

less-plugin-autoprefix
========================

Uses autoprefixer to add prefixes to css after conversion from less.

## lessc usage

Install..

```
npm install -g less-plugin-autoprefix
```

and then on the command line,

```
lessc file.less --autoprefix="browsers"
```

The browsers are a comma seperated list of [browsers as specified with autoprefixer](https://github.com/postcss/autoprefixer#browsers).

## Programmatic usage

```js
var LessPluginAutoPrefix = require('less-plugin-autoprefix'),
    autoprefixPlugin = new LessPluginAutoPrefix({browsers: ["last 2 versions"]});
less.render(lessString, { plugins: [autoprefixPlugin] })
  .then(
```

## Browser usage

Browser usage is not supported at this time.

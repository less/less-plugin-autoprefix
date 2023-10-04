[![NPM version](https://badge.fury.io/js/less-plugin-autoprefix.svg)](http://badge.fury.io/js/less-plugin-autoprefix)

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

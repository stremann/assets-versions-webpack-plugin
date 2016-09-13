Assets Versions
===============
Easy assets versions Webpack plugin.   

[![build status](https://travis-ci.org/stremann/assets-versions-webpack-plugin.svg?branch=master)](https://travis-ci.org/stremann/assets-versions-webpack-plugin)
[![coverage status](https://coveralls.io/repos/github/stremann/assets-versions-webpack-plugin/badge.svg?branch=master)](https://coveralls.io/github/stremann/assets-versions-webpack-plugin?branch=master)
[![npm version](https://img.shields.io/npm/v/assets-versions-webpack-plugin.svg)](https://www.npmjs.com/package/assets-versions-webpack-plugin)
[![npm downloads](https://img.shields.io/npm/dm/assets-versions-webpack-plugin.svg?style=flat-square)](https://www.npmjs.com/package/assets-versions-webpack-plugin)

### Installation

To install the stable version:

```
npm install --save-dev assets-versions-webpack-plugin
```

This assumes you are using [npm](https://www.npmjs.com/) as your package manager.  

### Gist

The only thing you need is to specify paths to files which should not be cached.

```js
import AssetsVersions from 'assets-versions-webpack-plugin';

new AssetsVersions({
    indexPath: 'path/to/index.html',
    cssPath: 'path/to/styles.css',
    jsPath: 'path/to/app.js'
});
```

That's it!

### Change Log

This project adheres to [Semantic Versioning](http://semver.org/).
Every release is documented on the GitHub [Releases](https://github.com/stremann/assets-versions-webpack-plugin/releases) page.

### License

MIT
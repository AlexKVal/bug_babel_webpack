# trash project

With this versions (`babel-loader@4.3.0`)
```json
"dependencies": {
  "babel-core": "5.1.10",
  "babel-loader": "4.3.0",
  "webpack": "1.8.5"
}
```
```sh
$ git clone git@github.com:AlexKVal/bug_babel_webpack.git
$ npm istall
```

this code [client.js](https://github.com/AlexKVal/bug_babel_webpack/blob/master/client.js)
```js
import plugin from './client_plugin';
console.log("hello " + plugin.p)
```
compiles OK
```sh
$ webpack
```
into this code [bundle.js](https://github.com/AlexKVal/bug_babel_webpack/blob/master/bundle.js)
```js
var plugin = _interopRequire(__webpack_require__(1));
console.log("hello " + plugin.p);
```

But with the `babel-loader@5.0.0`
```sh
$ npm i babel-loader@5.0.0
$ webpack
```
it compiles into this [bundle.js](https://github.com/AlexKVal/bug_babel_webpack/blob/wrong/bundle.js)
```js
var _plugin = __webpack_require__(1);
var _plugin2 = _interopRequireWildcard(_plugin);
console.log("hello " + _plugin2["default"].p);
```

And in that case if I run
```js
eval('console.log("hello " + plugin.p)');
```
I've got a `ReferenceError` `cannot find "plugin"`

[Webpack config](https://github.com/AlexKVal/bug_babel_webpack/blob/master/webpack.config.js):
```js
module.exports = {
  entry: "./client.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js/, loader: 'babel', exclude: /node_modules/ }
    ]
  }
};
```

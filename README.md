# trash project

With this versions
```json
"dependencies": {
  "babel-core": "5.1.10",
  "babel-loader": "4.3.0",
  "webpack": "1.8.5"
}
```
this code `client.js`
```js
import plugin from './client_plugin';
console.log("hello " + plugin.p)
```
compiles OK
```sh
$ npm i
$ webpack
```
into this code `bundle.js`
```js
var plugin = _interopRequire(__webpack_require__(1));
console.log("hello " + plugin.p);
```

But with the `babel-loader@5.0.0`
```sh
$ npm i babel-loader@5.0.0
$ webpack
```
it compiles into this `bundle.js`
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

Webpack config:
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

# trash project

With this versions
```json
"dependencies": {
  "babel-core": "5.1.10",
  "babel-loader": "4.3.0",
  "webpack": "1.8.5"
}
```

this code
```js
import plugin from './client_plugin';
console.log("hello " + plugin.p)
```
compiles OK into this
```js
var plugin = _interopRequire(__webpack_require__(1));
console.log("hello " + plugin.p);
```

But with the `babel-loader@5.0.0`
it compiles into this
```js

```

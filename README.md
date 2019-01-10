# NodeExpressTaskApp
Nodejs API's build using Express for Task Management System.
The following tools and technologies being used with their best practices:

  - [Express](https://expressjs.com/) - Web application Framework for NodeJS
  - [winston](https://github.com/winstonjs/winston) - Universal logging library with support for multiple transports(i.e. savings log in a file).
  - [http-errors](https://www.npmjs.com/package/http-errors) - Create HTTP errors for Express, Koa, Connect, etc. with ease
  - [cors](https://github.com/expressjs/cors) - Express middleware to allow Cross Origin Resource sharing.
  - [compression](https://github.com/expressjs/compression) - Node.js compression middleware. Supported compression codings are deflate and gzip.
  - [cookie-parser](https://github.com/expressjs/cookie-parser) - Parse Cookie header and populate req.cookies with an object keyed by the cookie names.
  - [hbs](https://handlebarsjs.com/) - Express.js template engine plugin for Handlebars.

  - [helmet](https://github.com/helmetjs/helmet) - To secure Express/Connect apps from various well-known web vulnerabilities by setting HTTP headers.

## Install

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/). Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```bash
$ npm install compression
```

## API

<!-- eslint-disable no-unused-vars -->

```js
var compression = require('compression')
```

```js
var compression = require('compression')
var express = require('express')

var app = express()
app.use(compression({filter: shouldCompress}))

function shouldCompress (req, res) {
  if (req.headers['x-no-compression']) {
    // don't compress responses with this request header
    return false
  }

  // fallback to standard filter function
  return compression.filter(req, res)
}
```

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/compression.svg
[npm-url]: https://npmjs.org/package/compression
[travis-image]: https://img.shields.io/travis/expressjs/compression/master.svg
[travis-url]: https://travis-ci.org/expressjs/compression
[coveralls-image]: https://img.shields.io/coveralls/expressjs/compression/master.svg
[coveralls-url]: https://coveralls.io/r/expressjs/compression?branch=master
[downloads-image]: https://img.shields.io/npm/dm/compression.svg
[downloads-url]: https://npmjs.org/package/compression

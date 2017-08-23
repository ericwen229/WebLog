var config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.build.env.NODE_ENV)
}

var path = require('path')
var express = require('express')
var proxyMiddleware = require('http-proxy-middleware')
var compressMiddleware = require('compression')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

app.use(compressMiddleware())

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

var staticConfig = {
  etag: false,
  maxAge: '10m',
}

app.use(express.static(config.build.assetsRoot, staticConfig))

// serve pure static assets
var staticPath = path.posix.join(config.build.assetsPublicPath, config.build.assetsSubDirectory)
app.use(staticPath, express.static('./static', staticConfig))

var uri = 'http://localhost:' + port

var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})

console.log('> Starting prod server...')

var server = app.listen(port, function () {
  console.log('> Listening at ' + uri + '\n')
  _resolve()
})

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}

const express = require('express')
const http = require('http')
const socket = require('socket.io')

const config = require('./config')

const logger = require('morgan')
const bodyParserMiddleware = require('body-parser')
const responseMiddleware = require('./middlewares/response')

const httpRouter = require('./routes/http')
const socketRouter = require('./routes/socket')

// setup server
const app = express()
const server = http.createServer(app)
const io = socket(server)

global.app = app
global.server = server
global.io = io

// attach middlewares
app.use(logger('dev'))
app.use(bodyParserMiddleware.urlencoded({
  extended: true,
}))
app.use(bodyParserMiddleware.json())
app.use(responseMiddleware())

// attach routers
app.use('/api', httpRouter)
io.on('connection', socketRouter)

const port = process.env.PORT || config.port

server.listen(port, () => {
  console.log(`server listening on port ${port}`)
})

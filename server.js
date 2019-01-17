const express = require('express')
const hbs = require('express-handlebars')

const route = require('./route')

const server = express()

server.engine('hbs', hbs({
  extname: 'hbs'
}))
server.set('view engine', 'hbs')

server.use(express.static('public'))

server.use('/', route)

module.exports = server
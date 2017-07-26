process.env.PROJECT_DIR = __dirname + '/src'

require('app-module-path').addPath('./lib')
require('./lib/json-response')

const debug = require('debug')('assistance-service:server')
debug('dir', process.env.PROJECT_DIR)
const path = require('path')
const home = require('os').homedir()
const envPath = path.join(home, '.env')

debug('Server starting ENV =>', process.env.NODE_ENV)

if (process.env.NODE_ENV === 'production') {
  require('babel-polyfill')
  // require('dotenv').config({path: envPath})
  require('dotenv').config()
  require('./dist/initializers/mongodb')
  require('./dist/index')
  debug('end production')
} else {
  require('dotenv').config()
  require('./src/initializers/mongodb')
  require('./src/index')
  debug('end other')
}

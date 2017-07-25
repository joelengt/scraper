import apiCognitiveMicrosoft from '~/src/routes/cognitive-microsoft'
import apiAssistance from '~/src/routes/assistance'
import applicationFace from '~/src/routes/face-app'
import home from '~/src/routes/pages/home'
import users from '~/src/routes/users'
import usersView from '~/src/routes/pages/user'
import checkAssistance from '~/src/routes/pages/assistance'

const debug = require('debug')('assistance-service:routes')

module.exports = (app) => {
  // api
  app.use('/api/cognitive-microsoft', apiCognitiveMicrosoft)
  app.use('/api/verify-face', applicationFace)
  app.use('/api/users', users)
  app.use('/api/assistance', apiAssistance)

  // viewers
  app.use('/test', home)
  app.use('/users', usersView)
  app.use('/assistance', checkAssistance)

  // Middleware express 401
  app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
      res.status(401).send('invalid token...')
    }
  })

  // Middleware express 404
  app.use((req, res, next) => {
    res.status(404).send('404 : Not Found')
  })

  // Middleware express 500
  app.use((err, req, res, next) => {
    res.status(500).send('500 : Server Error')
  })
}

const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../config/default.config')
// eslint-disable-next-line consistent-return
export default (req, res, next) => {
  let token = req.headers['x-access-token'] || req.headers.authorization
  if (token.startsWith('Bearer ')) {
    // Remove Bearer from string
    token = token.slice(7, token.length)
  }
  if (token) {
    // eslint-disable-next-line consistent-return
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      // eslint-disable-next-line valid-typeof
      if (typeof err !== null) {
        req.decoded = decoded
        next()
      } else {
        return res.status(422).send({
          success: false,
          message: 'Token is not valid'
        })
      }
    })
  } else {
    return res.status(422).send({
      success: false,
      message: 'Auth token is not supplied'
    })
  }
}

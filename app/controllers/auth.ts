const jwt = require('jsonwebtoken')
const passport = require('passport')

const { JWT_SECRET, CLIENT_URL } = require('../config/default.config')

const authGoogle = passport.authenticate('google', {
  scope: ['email', 'profile']
})

const authRedirectGoogle = (req, res) => {
  const token = jwt.sign(
    {
      data: req.user.userId
    },
    JWT_SECRET,
    { expiresIn: '24h' }
  )
  res.redirect(`${CLIENT_URL}/home?token=${token}&userid=${req.user.userId}`)
}

export { authGoogle, authRedirectGoogle }

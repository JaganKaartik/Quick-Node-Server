import express from 'express'
import { authGoogle, authRedirectGoogle } from '../controllers/auth'

const passport = require('passport')

const authRouter = express.Router()

authRouter.get('/google', authGoogle)
authRouter.get(
  '/google/redirect',
  passport.authenticate('google', {
    failureRedirect: '/',
    session: false
  }),
  authRedirectGoogle
)
export = authRouter

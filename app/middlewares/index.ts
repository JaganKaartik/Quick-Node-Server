import express from 'express'
import { authRouter, apiRouter } from '../routes'

const Middleware = express()
const passport = require('passport')
const cors = require('cors')

const passportSetup = require('../config/passport-setup')

const { CLIENT_ORIGIN } = require('../config/default.config')

Middleware.use(passport.initialize())
Middleware.use(passport.session())

Middleware.use(
  cors({
    orgin: CLIENT_ORIGIN,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true
  })
)

Middleware.use(express.urlencoded())
Middleware.use(express.json())
Middleware.use('/auth', authRouter)
Middleware.use('/api/v1', apiRouter)

export = Middleware

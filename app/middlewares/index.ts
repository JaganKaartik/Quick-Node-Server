import express from 'express'
import { authRouter, apiRouter } from '../routes'

const Middleware = express()
const bodyParser = require('body-parser')
const session = require('express-session')
const cookieSession = require('cookie-session')
const cookieParser = require('cookie-parser')
const passport = require('passport')
const cors = require('cors')
const passportSetup = require('../config/passport-setup')

Middleware.use(
  cookieSession({
    name: 'session',
    keys: [process.env.COOKIE_KEY],
    maxAge: 24 * 60 * 60 * 100
  })
)

Middleware.use(cookieParser())

Middleware.use(
  cors({
    orgin: 'http://localhost',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true // Allows session ookie from browser to pass through
  })
)

Middleware.use(bodyParser.urlencoded({ extended: false }))
Middleware.use(bodyParser.json())
Middleware.use('/auth', authRouter)
Middleware.use('/api/v1', authRouter)

export = Middleware

import express from 'express'
import { authRouter, apiRouter } from '../routes'

const Middleware = express()
const bodyParser = require('body-parser')
const cors = require('cors')

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

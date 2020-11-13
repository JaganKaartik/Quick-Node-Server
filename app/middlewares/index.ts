import express from 'express'
import { authRouter, apiRouter } from '../routes'

const Middleware = express()

Middleware.use('/api/v1', authRouter)
Middleware.use('/auth', authRouter)

export = Middleware

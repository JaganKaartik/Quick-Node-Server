import express from 'express'
import { getController } from '../controllers/api'

const apiRouter = express.Router()

apiRouter.get('/get', getController)

export = apiRouter

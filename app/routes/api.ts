import express from 'express'
import { getController } from '../controllers/api'
import authCheck from '../middlewares/auth-check'

const apiRouter = express.Router()

apiRouter.get('/get', authCheck, getController)

export = apiRouter

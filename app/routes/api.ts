import express from 'express'
import {
  getController,
  postController,
  putController,
  deleteController
} from '../controllers/api'
import authCheck from '../middlewares/checkToken'

const apiRouter = express.Router()

apiRouter.get('/get', authCheck, getController)
apiRouter.post('/post', authCheck, getController)
apiRouter.delete('/delete', authCheck, getController)
apiRouter.put('/put', authCheck, getController)

export = apiRouter

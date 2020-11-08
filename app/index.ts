import express from 'express'
import { rootController } from './controllers'
import { connectDB } from './config/database'

const app = express()
const port = process.env.PORT || 5000

connectDB()

app.get('/', rootController)

app.listen(port, () => {
  console.log(`App running at port: ${port}`)
})

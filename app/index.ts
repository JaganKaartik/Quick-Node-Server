import express from 'express'
import { rootController } from './controllers/'

const app = express()
const port = process.env.PORT || 5000

app.get('/', rootController)

app.listen(port, () => {
  console.log(`App running at port: ${port}`)
})

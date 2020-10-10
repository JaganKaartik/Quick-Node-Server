import express from 'express'
import { rootController } from './controllers/'

const app = express()
const path = require('path')
const port = process.env.PORT || 5000

app.set('views',path.join(__dirname,'./views'))

app.get('/',rootController)

app.listen(port, () => {
  console.log(`App running at port: ${port}`)
})
import express from 'express'
import { connectDB } from './config/database'

const app = express()
const port = process.env.PORT || 5000

connectDB()

app.listen(port, () => {
  console.log(`App running at port: ${port}`)
})

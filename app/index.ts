import express from 'express'
import connectDB from './config/database'

const { PORT } = require('./config/default.config')

const app = express()
const port = PORT || 8000

app.disable('x-powered-by')

connectDB()

/* If Static asset */

// if (NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../../app/build')))
//   app.get('/*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../../app/build', 'index.html'))
//   })
// }

app.listen(port, () => {
  console.log(`App running at port: ${port}`)
})

import { ConnectionOptions, connect } from 'mongoose'

const { MONGO_URL } = require('./default.config')

const connectDB = async () => {
  try {
    const options: ConnectionOptions = {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    }
    await connect(MONGO_URL, options)
    console.log('MongoDB Successfully Connected...')
  } catch (err) {
    console.error(err.message)
    process.exit(1)
  }
}

export = connectDB

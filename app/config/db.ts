import mongoose from 'mongoose'

const mongoDB = process.env.mongoDB_URL || ''
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection
console.log(mongoose.connection.readyState)

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

import mongoose from 'mongoose'

const { Schema } = mongoose

const userSchema = new Schema({
  userId: String,
  name: String,
  provider: String,
  profileImageUrl: String
})

export = mongoose.model('user', userSchema)

/* eslint-disable import/no-unresolved */
const passport = require('passport')
const TwitterStrategy = require('passport-twitter')
const User = require('../models/user')

require('dotenv').config()

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then((user) => {
      done(null, user)
    })
    .catch((e) => {
      done(new Error('Failed to deserialize an user'))
    })
})

passport.use(
  new TwitterStrategy(
    {
      consumerKey: process.env.TWITTER_CONSUMER_KEY,
      consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
      callbackURL: '/auth/twitter/redirect'
    },
    async (token, tokenSecret, profile, done) => {
      User.findOne({
        userId: profile._json.id_str
      }).then((currentUser) => {
        if (!currentUser) {
          const newUser = new User({
            userId: profile._json.id_str,
            provider: profile.provider,
            name: profile._json.name,
            profileImageUrl: profile._json.profile_image_url
          }).save()
          done(null, newUser)
        } else {
          done(null, currentUser)
        }
      })
    }
  )
)

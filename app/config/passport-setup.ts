const passport = require('passport')
const TwitterStrategy = require('passport-twitter')
const GoogleStrategy = require('passport-google-oauth2')
const User = require('../models/user')

const {
  TWITTER_CONSUMER_KEY,
  TWITTER_CONSUMER_SECRET,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET
} = require('./default.config')

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
      consumerKey: TWITTER_CONSUMER_KEY,
      consumerSecret: TWITTER_CONSUMER_SECRET,
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

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/redirect',
      passReqToCallback: true
    },
    async (request, accessToken, refreshToken, profile, done) => {
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

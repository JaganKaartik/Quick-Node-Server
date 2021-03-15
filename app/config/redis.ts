const express = require('express')
const session = require('express-session')
const redis = require('redis')
const connectRedis = require('connect-redis')
const bodyParser = require('body-parser')

const { REDIS_HOST, REDIS_PORT, SESSION_SECRET } = require('./default.config')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// enable this if you run behind a proxy (e.g. nginx)
// app.set('trust proxy', 1)

const RedisStore = connectRedis(session)

// Configure redis client

const redisClient = redis.createClient({
  host: REDIS_HOST || 'localhost',
  port: REDIS_PORT || 6379
})

redisClient.on('error', (err) => {
  console.log(`Could not establish a connection with redis. ${err}`)
})

redisClient.on('connect', (err) => {
  console.log('Connected to redis successfully')
})

// Configure session middleware

app.use(
  session({
    store: new RedisStore({ client: redisClient }),
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false, // if true only transmit cookie over https
      httpOnly: false, // if true prevent client side JS from reading the cookie
      maxAge: 1000 * 60 * 60 * 24 * 365 // session max age in miliseconds
    }
  })
)

export = app

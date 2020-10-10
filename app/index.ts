import express from 'express'

const app = express()
const path = require('path')

app.set('views',path.join(__dirname,'./views'))

app.get('/',(req,res)=>{
    res.send('<h1>Welcome to My Express App</h1>')
})
import express from 'express'

const app = express()

app.get('/',(req,res)=>{
    res.send('<h1>Welcome to My Express App</h1>')
})
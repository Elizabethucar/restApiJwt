const express = require('express')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const colors = require('colors')
const connectDB= require('./config/db')

const PORT = process.env.PORT || 4000
connectDB()

const app = express()

//Middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/goals', require('./routes/goalRoutes'))
app.use(errorHandler)

app.listen(PORT,()=>{
  (`listening on port ${PORT}`)
})
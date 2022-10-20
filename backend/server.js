const express = require('express')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')

const PORT = process.env.PORT || 4000
const app = express()

//Middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/goals', require('./routes/goalRoutes'))

app.listen(PORT,()=>{
  (`listening on port ${PORT}`)
})
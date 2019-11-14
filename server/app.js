require('./config/config')
require('./helper/db')

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const empRoute = require('./routes/employee.route')

var app = express()

// middleware
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)
app.use(cors())
app.use('/api', empRoute)


// start server
app.listen(process.env.PORT, () => console.log(`Server started at port : ${process.env.PORT}`))

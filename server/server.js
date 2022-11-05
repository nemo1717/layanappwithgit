const { application } = require('express')
require("dotenv").config({path: "/home/naheem/Documents/LayanAppWithGit/server/routes/.env"})
const express = require('express')
const app = express()
const mongoose = require("mongoose")
const indexRoutes = require('./routes/index')

app.use(express.json())
mongoose.connect(process.env.MONG_URI)
    .then(()=>{
  
    })
    .catch((error)=>{
        console.log(error)
    })

app.use('/', indexRoutes)




app.listen(process.env.PORT, () => (console.log("server started at port 5000")))
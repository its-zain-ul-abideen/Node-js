const express = require('express')
const app = express()
const {connectDB} = require('./db/connectdb.js')
const {studentModel} = require('./models/Student.js')
const port = process.env.PORT || 5000;
DATABASE_URL = 'mongodb://localhost:27017/schooldb'

connectDB(DATABASE_URL)

app.listen(port,()=>{
   
    console.log("Server is listening at 5000")
})
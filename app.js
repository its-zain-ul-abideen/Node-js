const express = require('express')
const app = express()
const {connectDB} = require('./db/connectdb.js')
const {createDoc} = require('./models/Student.js')
const {studentModel} = require('./models/Student.js')
const port = process.env.PORT || 5000;
DATABASE_URL = 'mongodb://localhost:27017/schooldb'

connectDB(DATABASE_URL)
createDoc('zaom',19,6800.75,['GAMER','CODER'],[{value:'YEAH!!!!'}],true)

app.listen(port,()=>{
   
    console.log("Server is listening at 5000")
})
const mongoose = require("mongoose")

const connectDB = async (DATABASE_URL)=>{
    DATABASE_OPTIONS = {
        user:"zain",
        pass:"123456",
        dbName:"schooldb",
        authSource:"schooldb"
    }
    try {
        mongoose.connect(DATABASE_URL,DATABASE_OPTIONS)
        console.log("mongodb connected")
    } catch (error) {
        console.log(error)
    }
}

module.exports = {connectDB}
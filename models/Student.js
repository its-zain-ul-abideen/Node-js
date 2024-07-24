
const mongoose = require('mongoose')


const studentSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    age: { type: Number, min: 18, max: 50, required: true },
    fees: { type: mongoose.Decimal128, required: true, validate: v => v >= 5500.50 },
    hoobies: { type: Array },
    isactive: { type: Boolean },
    comments: [{ value: { type: String }, publish: { type: Date, default: Date.now } }],
    join: { type: Date, default: Date.now }
})


const studentModel = mongoose.model('Student', studentSchema)

const createDoc = async (nm,ag,fee,hoobi,comm,isacti) => {

    try {
        const studentdoc1 = studentModel({
            name: nm,
            age: ag,
            fees:fee,
            hoobies:hoobi,
            comments: comm,
            isactive:isacti
        })
        const dublicate_studentdoc1 = studentModel({
            name: nm +'asd',
            age: ag+3,
            fees:fee+7,
            hoobies:hoobi,
            comments: comm,
            isactive:isacti
        })
        const result = await studentdoc1.save()
        console.log(result);
    } catch (err) {
        console.log(err)
    }
}


module.exports = { createDoc }
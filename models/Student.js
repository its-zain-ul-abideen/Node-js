
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

const getAllDoc = async ()=>{

    // await studentModel.create({
    //     name:'Bryan',
    //     age:32,
    //     fees:9823.99,
    //     hoobies:['p**n','boom'],
    //     isactive:true,
    //     comments:[{value:'good kid'}],
        
    // })

    // const result =await studentModel.find();
    // result.forEach((item)=>{
    //     console.log(
    //         item.name,
    //         item.age,
    //         item.fees.toString(),
    //         item.hoobies,
    //         item.isactive,
    //         item.comments[0].value,
    //         item.comments[0].publish,
    //         item.join
    //     )
    // })
    const result =await studentModel.find({age:{$not:{$gt:25}}})
    console.log(result)
}

getAllDoc()
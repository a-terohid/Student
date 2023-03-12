import { Schema, model, models } from "mongoose";

const studentSchema = new Schema({
    name: {
        type : String,
        required: true,
    },
    lastName: {
        type : String,
        required: true,
    },
    personalCode: {
        type : Number,
        required: true,
    },

    phoneNumber : String,
    lessons : [],
    email : String,
    avvrage : Number
})



const Student = models.Student || model( "Student" , studentSchema )

export default Student
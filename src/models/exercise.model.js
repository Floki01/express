import mongoose from "mongoose";

const exerciseShema = new mongoose.Schema({
    ejercicio:{
        type: String,
        required: true
    },
    series:{
        type: String,
        required: true,
    },
    repeticiones:{
        type: String,
        required: true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        cascade: true
    }
})

const exerciseModel = mongoose.model("Exercise", exerciseShema);
export default exerciseModel;
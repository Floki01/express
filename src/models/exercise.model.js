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
    routine:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Routine',
        cascade: true
    }
})

const exerciseModel = mongoose.model("Exercise", exerciseShema);
export default exerciseModel;
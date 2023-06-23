import mongoose, { Schema } from "mongoose"

const routineShema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    exercises:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Exercise'
    }],
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

const routineModel = mongoose.model("Routine",routineShema);
export default routineModel;
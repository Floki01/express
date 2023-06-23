import mongoose from "mongoose";


const user = 'tarea_1';
const password = 'tarea_1';
const db_name = 'Tarea';

const uri = 'mongodb+srv://tarea_1:tarea_1@cluster0.e7wmebc.mongodb.net/Fitness';

export default function connectDB(){
    return mongoose.connect(uri)
        .then((success) =>{
            console.log("Exitoso");
            return true;
    }).catch((error)=>{
        console.log("Error");
        return false;
    })
}
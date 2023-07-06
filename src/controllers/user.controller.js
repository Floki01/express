import userModel from "../models/user.model.js";
import exerciseModel  from "../models/exercise.model.js";
import routineModel from "../models/routine.model.js";
import mongoose from "mongoose";
import bcrypt from "bcrypt";

export async function createUser(req, res){

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    try{
        const createdUser = await userModel.create({
            name: req.body.name,
            email:req.body.email,
            password: hashedPassword,
        });
        return res.status(201).send({response: createdUser});
    }
    catch(error){
        res.status(500).send({error});
    }
}

export async function getUser(req, res) {
    try {
        const users = await userModel.find().exec();

        return res.status(200).json(users);
    } catch (error) {
        res.status(500).send({ error });
    }
}

//solo elimina al usuario no a las rutinas o ejercicos que estan asociadas a la id del user 
export async function deleteUser(req, res) {
    try {
        const userId = req.params.userId;
        const deletedUser = await userModel.findByIdAndDelete(userId).exec();

        if (!deletedUser) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }

        return res.status(200).json({ message: "Usuario eliminado exitosamente" });
    } catch (error) {
        res.status(500).send({ error });
    }
}


export async function createRoutine(req, res){

    const userId = req.body.userId;
    const routineName = req.body.routineName;

    try{
        //Datos necesarios para crear el rutina
        const user = await userModel.findById(userId);
        
        if(!user){
            return res.status(404).send("El usuario no se encuentra");
        }
        
        const newExercise = await routineModel.create({
            name: routineName,
            user: userId
        })

        //Se agrega una rutina al usuario.
        user.routines.push(newExercise);
        await user.save()

        return res.status(201).send("Rutina creada exitosamente");

    }catch(error){
        res.status(500).send({error});
    }

}


export async function addExercise(req, res){

    //Datos necesarios para crear un ejercicio
    const rutinaId = req.body.rutinaId;
    const ejercicio = req.body.ejercicio;
    const series = req.body.series;
    const repeticiones = req.body.repeticiones;

    try{

        if(!mongoose.Types.ObjectId.isValid(rutinaId)){
            return res.status(404).send("La rutina no existe");
        }

        const routine =await routineModel.findById(rutinaId);
        
        const exercise =await exerciseModel.create({
            ejercicio: ejercicio,
            series: series,
            repeticiones: repeticiones,
            routine: rutinaId
        })

        routine.exercises.push(exercise);
        routine.save();

    
        return res.status(201).send("Ejercicio agregado a la rutina correctamente");

    }catch(error){
        res.status(500).send({error});
    }

}

export default{ createUser, getUser, deleteUser,createRoutine,addExercise}
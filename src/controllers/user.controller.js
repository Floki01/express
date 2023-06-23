import userModel from "../models/user.model.js";
import exerciseModel  from "../models/exercise.model.js";
import routineModel from "../models/routine.model.js";

export async function createUser(req, res){
    try{
        const createdUser = await userModel.create({
            name: req.body.name,
            email:req.body.email,
            password:req.body.password,
        });
        return res.status(201).send({response: createdUser});
    }
    catch(error){
        res.status(500).send({error});
    }
}

export async function createRoutine(req, res){

    try{
        //Datos necesarios para crear el rutina
        const userId = req.body.userId;
        const routineName = req.body.routineName;
        

        const user = await userModel.findById(userId);

        const newExercise = await routineModel.create({
            name: routineName,
            user: userId
        })

        //Se agrega una rutina al usuario.
        user.routines.push(newExercise);
        await user.save()

        return res.status(201).send("ok");

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

    const exercise =await exerciseModel.create({
        ejercicio: ejercicio,
        series: series,
        repeticiones: repeticiones,
        routine: rutinaId
    })

    const routine = await routineModel.findById(rutinaId);
    routine.exercises.push(exercise);
    routine.save();

    
    return res.status(201).send("ok");
    
}
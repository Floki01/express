import userModel from "../models/user.model.js";


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

export async function createExercise(req, res){

    try{
        //Datos necesarios para crear el ejercicio
        const userId = req.body.userId;
        const ejercicio = req.body.ejercicio;
        const repeticiones = req.body.repeticiones;
        const series = req.body.series;

        const user = await userModel.findById(userId);

        const newExercise = await exerciseModel.create({
            ejercicio: ejercicio,
            series: series,
            repeticiones: repeticiones,
            user: userId,
        });

        //Se agrega el ejercicio al usuario.
        user.exercises.push(newExercise);
        await user.save()

        return res.status(201).send("ok");

    }catch(error){
        res.status(500).send({error});
    }

    

    return res.status(201);
}

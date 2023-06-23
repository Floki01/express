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
    const userId = req.body.userId;
    const ejercicio = req.body.ejercicio;
    const repeticiones = req.body.repeticiones;
    const series = req.body.series;
    console.log(userId);
}


export async function getExercises(req, res){
    const id = req.params.id;
}
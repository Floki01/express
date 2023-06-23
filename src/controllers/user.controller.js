import userModel from "../models/user.model.js";
import ExerciseModel from '../models/exercise.model.js';

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


export async function eliminarRutina(req, res) {
  const idRutina = req.params.idRutina;

  try {
    const rutina = await ExerciseModel.findById(idRutina);
    if (!rutina) {
      return res.status(404).send({ message: 'Rutina no encontrada' });
    }
    await rutina.remove();
    return res.status(200).send({ message: 'Rutina eliminada correctamente' });
  } catch (error) {
    return res.status(500).send({ error });
  }
}

export async function getRutinasPorUsuario(req, res) {
  const idUsuario = req.params.idUsuario;

  try {
    const usuario = await UserModel.findById(idUsuario).populate('rutinas');
    if (!usuario) {
      return res.status(404).send({ message: 'Usuario no encontrado' });
    }
    const rutinas = usuario.rutinas;
    return res.status(200).send({ rutinas });
  } catch (error) {
    return res.status(500).send({ error });
  }
}
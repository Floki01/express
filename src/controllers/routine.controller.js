import routineModel from "../models/routine.model.js";
import userModel from "../models/user.model.js"
import exerciseModel from "../models/exercise.model.js";

export async function eliminarRutina(req, res) {
    const idRutina = req.params.idRutina;

    try {
        // Buscar la rutina por su ID
        const rutina = await routineModel.findById(idRutina).populate("exercises");
        if (!rutina) {
          return res.status(404).send({ message: 'Rutina no encontrada' });
        }
    
        // para eliminar ejercicios de las rutinas
        const ejercicios = rutina.exercises;
        for (const ejercicio of ejercicios) {
          await exerciseModel.findByIdAndDelete(ejercicio._id);
        }
    
        // Eliminar la rutina de la base de datos
        await rutina.deleteOne();
    
        return res.status(200).send({ message: 'Rutina eliminada correctamente' });
      } catch (error) {
        return res.status(500).send({ error });
      }
}


export async function getRutinasPorUsuario(req, res) {
    const idUsuario = req.params.idUsuario;
  
    try {
        const usuario = await userModel.findById(idUsuario);
        const rutinas = await routineModel.find({user: usuario._id});
        if (!usuario) {
            return res.status(404).send({ message: 'Usuario no encontrado' });
        }
        return res.status(200).send({ rutinas });
    } catch (error) {
        return res.status(500).send({ error });
    }
}

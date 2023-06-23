import userModel from "../models/user.model.js";
import exerciseModel  from "../models/exercise.model.js";

export async function eliminarRutina(req, res) {
  const idRutina = req.params.idRutina;

  try {
    const rutina = await exerciseModel.findById(idRutina);
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
    const usuario = await userModel.findById(idUsuario).populate('exercises');
    if (!usuario) {
      return res.status(404).send({ message: 'Usuario no encontrado' });
    }
    const rutinas = usuario.exercises;
    return res.status(200).send({ rutinas });
  } catch (error) {
    return res.status(500).send({ error });
  }
}

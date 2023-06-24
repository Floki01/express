import routineModel from "../models/routine.model.js";


export async function eliminarRutina(req, res) {
    const idRutina = req.params.idRutina;

    try {
        // Buscar la rutina por su ID
        const rutina = await routineModel.findById(idRutina);
        if (!rutina) {
           
            return res.status(404).send({ message: 'Rutina no encontrada' });
        }
        // Eliminar la rutina de la base de datos
        await rutina.remove();
        return res.status(200).send({ message: 'Rutina eliminada correctamente' });
    } catch (error) {
        return res.status(500).send({ error });
    }
}


export async function getRutinasPorUsuario(req, res) {
    const idUsuario = req.params.idUsuario;

    try {
        // Buscar el usuario por su ID y obtener las rutinas asociadas
        const usuario = await userModel.findById(idUsuario).populate('routines');
        if (!usuario) {
            return res.status(404).send({ message: 'Usuario no encontrado' });
        }
        // Mapear las rutinas del usuario y agregar los ejercicios asociados a cada rutina
        const rutinas = usuario.routines.map(routine => ({
            ...routine._doc,
            exercises: routine.getExercises(),
        }));
        return res.status(200).send({ rutinas });
    } catch (error) {
        return res.status(500).send({ error });
    }
}

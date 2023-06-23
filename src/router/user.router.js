import express from 'express';
import { createExercise } from '../controllers/user.controller.js';
import { eliminarRutina } from '../controllers/exercise.controller.js';
import { getRutinasPorUsuario } from '../controllers/exercise.controller.js';

const router = express.Router();
router.post("/rutinas/crear_rutina", createExercise);

router.delete('/rutinas/:idRutina', eliminarRutina);

router.get('/:idUsuario/rutinas', getRutinasPorUsuario);

export default router;
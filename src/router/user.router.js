import express from 'express';
import { createExercise } from '../controllers/user.controller.js';
import { eliminarRutina } from '../controllers/user.controller.js';
import { getRutinasPorUsuario } from '../controllers/user.controller.js';

const router = express.Router();
router.post("/rutinas/crear_rutina", createExercise);

router.delete('/rutinas/:idRutina', eliminarRutina);

router.get('/:idUsuario/rutinas', getRutinasPorUsuario);

export default router;
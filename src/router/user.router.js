import express from 'express';
import { createRoutine, addExercise } from '../controllers/user.controller.js';
import { eliminarRutina, getRutinasPorUsuario  } from '../controllers/routine.controller.js';


const router = express.Router();
router.post("/rutinas/crear_rutina", createRoutine);
router.post("/rutinas/agregar_ejercicio", addExercise)
router.delete('/rutinas/:idRutina', eliminarRutina);
router.get('/:idUsuario/rutinas', getRutinasPorUsuario);


export default router;
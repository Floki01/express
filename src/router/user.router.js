import express from 'express';
import { createRoutine, addExercise } from '../controllers/user.controller.js';

const router = express.Router();
router.post("/rutinas/crear_rutina", createRoutine);
router.post("/rutinas/agregar_ejercicio", addExercise)

export default router;
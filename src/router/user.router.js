import express from 'express';
import { createExercise } from '../controllers/user.controller.js';

const router = express.Router();
router.post("/rutinas/crear_rutina", createExercise);

export default router;
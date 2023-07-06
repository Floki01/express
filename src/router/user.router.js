import express from 'express';
import userController from "../controllers/user.controller.js";
import { authRequired, hasRole, hasAnyRole } from "../utils/middlewares.js";
import { createRoutine, addExercise } from '../controllers/user.controller.js';
import { eliminarRutina, getRutinasPorUsuario  } from '../controllers/routine.controller.js';


const router = express.Router();



router.post("/rutinas/crear_rutina", createRoutine);
router.post("/rutinas/agregar_ejercicio", addExercise)
router.delete('/rutinas/:idRutina', eliminarRutina);
router.get('/:idUsuario/rutinas', getRutinasPorUsuario);

router.get("/", authRequired, hasRole("admin"), userController.getUser);
router.delete(
	"/",
	authRequired,
	hasAnyRole(["test", "a"]),
	userController.deleteUser
);
router.post("/", authRequired, userController.deleteUser);

export default router;
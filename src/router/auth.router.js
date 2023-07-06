import express from 'express';
import { createUser } from '../controllers/user.controller.js';
import authController from "../controllers/auth.controller.js";


const router = express.Router();

router.post("/register", createUser);
router.post("/login", authController.login);
router.get("/usuarioPorID/:userId", authController.usuarioPorID);


export default router;
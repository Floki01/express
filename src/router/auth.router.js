import express from 'express';
import { createUser, login, getUser } from '../controllers/user.controller.js';

const router = express.Router();
router.post("/register", createUser);
router.post("/login", login)
export default router;
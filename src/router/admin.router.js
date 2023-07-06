import express from "express";
import { getUsers } from "../controllers/trainer.controller.js";

const router = express.Router();

router.get("/getUsers",getUsers)


export default router;
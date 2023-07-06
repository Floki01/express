import mongoose from "mongoose";
import environment from "./environment.js";

const { MONGOURI } = environment;

export function connect() {
	return mongoose.connect(MONGOURI);
}
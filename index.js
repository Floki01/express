import express from "express";
import environment from "./src/configs/environment";
import authRouter from "./src/router/auth.router.js";
import { connect } from "./src/configs/mongo.js";
import userRouter from "./src/router/user.router.js";

const { PORT } = environment;

const server = express();

server.use(express.json());

server.use("/auth", authRouter);
server.use("/user", userRouter);

connect()
	.then(() => {
		server.listen(PORT, () => {
			console.log(`Server is running on ${PORT}`);
		});
	})
	.catch((err) => {
		console.log(err);
	});
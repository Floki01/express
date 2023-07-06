import dotenv from "dotenv";
dotenv.config();

export default {
	PORT: process.env.PORT,
	MONGOURI: process.env.MONGOURI,
	SECRET: process.env.SECRET,
};
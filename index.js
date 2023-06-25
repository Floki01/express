import express from 'express';
import cors from 'cors';
import connectDB from './src/configs/mongo.js';
import authRouter from './src/router/auth.router.js';
import userRouter from './src/router/user.router.js';

//Ejecutar con npm start

//

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use("/auth", authRouter);
app.use("/user", userRouter)

app.listen(3000, () => {
    console.log('Servidor Express en funcionamiento en el puerto 3000');
});
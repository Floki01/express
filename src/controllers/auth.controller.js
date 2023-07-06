import UserModel from "../models/user.model.js";
import bcrypt from "bcrypt";
import { generateToken, verifyToken } from "../utils/jwt.js";


async function login(req, res) {
	const user = await UserModel.findOne({ email: req.body.email })
		.select("+password")
		.exec();

	if (!user) {
		return res.status(404).json({ error: "usuario no encontrado" });
	}

	const passwordIsCorrect = await bcrypt.compare(
		req.body.password,
		user.password
	);

	if (!passwordIsCorrect) {
		return res.status(400).json({ error: "contrasena invalida" });
	}

	const token = generateToken(user);

	return res.status(200).json({ user, token });
}

async function usuarioPorID(req, res) {
	try {
	  const user = await UserModel.findById(req.params.userId).exec();
  
	  if (!user) {
		return res.status(404).json({ error: "Usuario no encontrado" });
	  }
  
	  return res.status(200).json({ user });
	} catch (err) {
	  return res.status(403).json(err);
	}
  }
  

export default { login ,usuarioPorID};
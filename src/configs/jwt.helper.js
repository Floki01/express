import jwt from "jsonwebtoken";

const SECRET = "secreto";

function verifyToken(token) {
	return jwt.verify(token, SECRET);
}

export { verifyToken };
import { verifyToken } from "./jwt.helper.js";

function authMiddleware (req, res, next){
    
    const headers = req.headers.authorization || req.headers.Authorization;

	try {
        const token = headers.split(" ")[1];
		const payload = verifyToken(token);
		req.userId = payload.id;
		next();

	} catch (err) {
		return returnErrorResponse(err, res);
	}
};

export{authMiddleware};
// Este es un middleware personalizado.
// Su funcion es la de chequear en la BBDD que el token que recibimos en el body de las request de cualquier solicitud, exista.
// Si existe, significa que nos pasaron un token válido y que el usuario está logueado.

import { Request, Response, NextFunction } from 'express';
import UserModel from '../models/user-model';

async function isAuth(req: Request, res: Response, next: NextFunction) {
	const { token } = req.body;

	const isAuthorized = await UserModel.checkToken(token);

	// Si el token que el cliente pone en la request no coincide con ninguno que esté en la base de datos
	// No tiene acceso a nada.
	if (!isAuthorized)
		return res.status(401).json({ message: 'Nothing to do over here...' });

	// Si coincide, está autenticado y seguimos con el proceso...
	next();
}

export default isAuth;
import { Router } from 'express';
import UserController from '../contollers/user-controller';
import authMiddleware from '../middlewares/auth';

export const userRouter = Router();

userRouter.get('/', UserController.getAll);

// Para efectuar el login, el método que corresponde es POST, ya que su función es la de CREAR un nuevo token.
userRouter.post('/login', UserController.login);

userRouter.post('/', authMiddleware, UserController.createUser);
userRouter.patch('/:username', authMiddleware, UserController.update);

// Para efectuar el logout de un usuario, el método que corresponde es el DELETE, ya que estamos borrando info de la BBDD, el token creado al momento del login.
userRouter.delete('/logout', authMiddleware, UserController.logout);
userRouter.delete('/:username', authMiddleware, UserController.delete);
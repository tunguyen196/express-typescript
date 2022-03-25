import express from 'express';
import { Container } from 'typedi';
import AuthController from '../app/Controller/AuthController';

const authRouter = express.Router();
const authController = Container.get(AuthController);

authRouter.post('/register', (authController.register));
authRouter.post('/login', (authController.login));

export default authRouter;
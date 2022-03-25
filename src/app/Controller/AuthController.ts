import { express } from 'express';
import { User } from './../Models/User';
import { Inject, Service } from 'typedi';
import AuthService from '../Services/AuthService';

interface IAuthRequest {
    params: {

    },
    body: User
}

@Service()
export default class AuthController {
    @Inject()
    private authService: AuthService;

    register: any = async (req: IAuthRequest, res: express.Response) => {
        try {
            const user = this.authService.register(req.body);
            
            return res.json({ code: 200, data: 'success' });
        } catch (err) {
            return res.json({ code: 400, message: 'error', log: err });
        }
    }

    login: any = async (req: IAuthRequest, res: express.Responese) => {
        return res.json(process.env.SECRET_KEY)
    }
}
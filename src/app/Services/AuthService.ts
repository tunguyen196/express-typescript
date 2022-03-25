import { UserRepository } from './../Repositories/UserRepository';
import { User } from './../Models/User';
import { Service } from "typedi";
import bcrypt from "bcryptjs";
@Service()
export default class AuthService {
    async register(userRegister: User): Promise<User> {
        userRegister.password = await bcrypt.hash(userRegister.password, 10);
        return await UserRepository.save(userRegister);
    }
} 
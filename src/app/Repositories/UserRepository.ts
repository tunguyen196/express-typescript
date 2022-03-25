import { User } from './../Models/User';
import { AppDataSource } from './../../config/data-source';

export const UserRepository = AppDataSource.getRepository(User);
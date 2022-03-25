import { User } from './../app/Models/User';
import "reflect-metadata"
import { Product } from '../app/Models/Product';
import { Category } from '../app/Models/Category';
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "trainning",
    synchronize: true,
    logging: true,
    entities: [Category, Product, User],
    subscribers: [],
    migrations: [],
})
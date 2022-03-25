import express from "express";
import { Category } from './app/Models/Category';
import { AppDataSource } from './config/data-source';
import { routes } from './routes';

const app = express()
//config .env
import dotenv from 'dotenv'
import path from "path";
dotenv.config({path: path.join(__dirname, ".env")})

//get form data
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//router
routes(app);

//run app
const port = process.env.PORT || 3000
app.listen(port)

//type orm
AppDataSource.initialize()
    .then(async() => {
        const category = new Category();
        category.name = 'cate1'
        category.isPublished = true
        category.parentId = 0

        //await AppDataSource.manager.save(category);
    })
    .catch((error) => console.log(error))
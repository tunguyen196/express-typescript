import { Category } from './app/Models/Category';
import { AppDataSource } from './data-source';
import express from "express"
import { routes } from './routes';
const bodyParser = require('body-parser');

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(port)

routes(app);


// to initialize initial connection with the database, register all entities
// and "synchronize" database schema, call "initialize()" method of a newly created database
// once in your application bootstrap
AppDataSource.initialize()
    .then(async() => {
        const category = new Category();
        category.name = 'cate1'
        category.isPublished = true
        category.parentId = 0

        //await AppDataSource.manager.save(category);
    })
    .catch((error) => console.log(error))
import { Container } from 'typedi';
import ProductController from './../app/Controller/ProductController';
import express from "express";
const productRouter = express.Router();
const productController = Container.get(ProductController);

productRouter.post('/store', productController.create);
productRouter.put('/:id', productController.update);
productRouter.delete('/:id', productController.destroy);
productRouter.get('/:id', productController.show);
productRouter.get('/', productController.index);

export default productRouter;
import express from "express";
import productController from "../app/Controller/ProductController";
const productRouter = express.Router();

productRouter.post('/store', productController.create);
productRouter.put('/:id', productController.update);
productRouter.delete('/:id', productController.destroy);
productRouter.get('/:id', productController.show);
productRouter.get('/', productController.index);

export default productRouter;
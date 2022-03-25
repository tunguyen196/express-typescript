import { Category } from './../Models/Category';
import { express } from 'express';
import { Product } from './../Models/Product';
import { Inject, Service } from "typedi";
import ProductService from "../Services/ProductService";
import { UpdateResult, DeleteResult } from 'typeorm';

interface IProductRequest {
    params: {
        id: number,
    },
    body: {
        name: string,
        price: number,
        amount: number,
        category_id: Category,
    }

}

@Service()
export default class ProductController {
    @Inject()
    private productService: ProductService;

    name: string;
    constructor() {
        // this.index = this.index.bind(this);
        // this.show = this.show.bind(this);
        // this.create = this.create.bind(this);
        // this.update = this.update.bind(this);
        // this.destroy = this.destroy.bind(this);
    }
    
    index: any = async (req: IProductRequest, res: express.Response) => {
         const products: Promise<Product> = await this.productService.getAllProduct();

         return res.json({code: 200, data: products});
    }

    show: any = async (req: IProductRequest, res: express.Response) => {
        const product = await this.productService.getInfoProduct(req.params.id);
        
        return res.json({code: 200, data: product});
    }

    create: any = async (req: IProductRequest, res: express.Response) => {
        const product = new Product();
        product.name = req.body.name;
        product.price = req.body.price;
        product.amount = req.body.amount;
        product.category = req.body.category_id;

        const productCreate: Product = await this.productService.createProduct(product);
        
        
        return res.json({code: 200, data: productCreate});
    }
    
    update: any = async (req: IProductRequest, res: express.Response) => {
        
        const product = new Product();
        product.name = req.body.name;
        product.price = req.body.price;
        product.amount = req.body.amount;
        product.category = req.body.category_id;

        const productUpdate: UpdateResult = await this.productService.updateProduct(product, req.params.id);

        return res.json({code: 200, data: productUpdate});
    }

    destroy: any = async (req, res) => {
        
        const deleteProduct: DeleteResult = await this.productService.deleteProduct(req.params.id);

        return res.json({code: 204, data: {}});
    }
}

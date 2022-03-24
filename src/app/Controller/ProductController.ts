import { Category } from './../Models/Category';
import { express } from 'express';
import { Product } from './../Models/Product';
import { Service } from "typedi";
import ProductService from "../Services/ProductService";

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
    private a:number;

    constructor(private productService: ProductService) {
        this.index = this.index.bind(this);
        this.show = this.show.bind(this);
        this.create = this.create.bind(this);
    }
    
    async index(req: Request, res:express.Response): Promise<JSON> {
         const products: Promise<Product> = await this.productService.getAllProduct();

         return res.json({code: 200, data: products});

    }

    async show(req: IProductRequest, res: express.Response) {
        const product = await this.productService.getInfoProduct(req.params.id);
        
        
        return res.json({code: 200, data: product});
    }

    async create(req: IProductRequest, res: express.Response) {
        const product = new Product();
        product.name = req.body.name;
        product.price = req.body.price;
        product.amount = req.body.amount;
        product.category = req.body.category_id;

        const productCreate: Product = await this.productService.createProduct(product);
        
        
        return res.json({code: 200, data: product});
    }
    
    // async update(req, res) {
    //     const productRepo = AppDataSource.getRepository(Product);
    //     const productUpdate = await productRepo.findOneBy({id: req.params.id});
    //     productUpdate.name = req.body.name;
    //     productUpdate.price = req.body.price;
    //     productUpdate.amount = req.body.amount;
    //     productUpdate.category = req.body.category_id;

    //     await AppDataSource.manager.save(productUpdate);

    //     return res.json({code: 200, data: productUpdate});
    // }

    // async destroy(req, res) {
    //     const productRepo = AppDataSource.getRepository(Product);
    //     const productDestroy = await productRepo.findOneBy({id: req.params.id});
    //     await AppDataSource.manager.remove(productDestroy);

    //     return res.json({code: 204, data: {}});
    // }
}
